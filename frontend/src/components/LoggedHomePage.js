import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoggedHomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to DreamParadise {user.name}!</h1>
    </div>
  );
}

export default LoggedHomePage;
