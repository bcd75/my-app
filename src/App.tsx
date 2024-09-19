import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* If not logged in, navigate to the Login page */}
        <Route path="/Login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

        {/* If logged in, navigate to the Dashboard */}
        <Route path="/Dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/Login" />} />

        {/* Redirect to login if the user tries to access the home route */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/Dashboard" : "/Login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
