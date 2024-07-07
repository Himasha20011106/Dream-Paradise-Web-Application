require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/User');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConn');

const app = express();
const PORT = process.env.PORT || 3501;

connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));

app.use(logger);
app.use(cookieParser());

// Register Endpoint
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ name, email, password: hash });
        res.json({ status: "OK", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Entered username or password is incorrect" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "The password is incorrect" });
        }

        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET || 'jwt-secret-key',
            { expiresIn: '1d' }
        );

        res.cookie('token', token, { httpOnly: true });
        res.json({ message: "Success", token, role: user.role, name: user.name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Middleware to check JWT token and user role
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || '';
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET || 'jwt-secret-key');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

const authorizeRole = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access Denied' });
    }
    next();
};

// Example of a protected route
app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: 'Welcome, Admin' });
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/root'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', err => {
    console.error(err);
    logEvents(`${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrlog.log');
});
