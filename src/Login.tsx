import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Use React Router's navigation

  // Mock credentials
  const mockUsername = "user";
  const mockPassword = "pass";

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent page refresh

    // Check if the credentials are valid
    if (username === mockUsername && password === mockPassword) {
      onLoginSuccess();  // Set login state in App component
      setError('');
      navigate('/dashboard');  // Navigate to the dashboard after successful login
    } else {
      setError('Invalid username or password');  // Show error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

