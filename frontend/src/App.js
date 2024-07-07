import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './components/login';
import LoggedHomePage from './components/LoggedHomePage';
import AdminDashboard from './components/AdminDashboard';
import SignupPage from './components/signup';
import EnquiryForm from './pages/EnquiryForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/home" element={<LoggedHomePage />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
