import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/RoomContext';
import api from '../../services/api';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.get('/users.json');
      const users = res.data;
      let found = false;

      for (let key in users) {
        if (users[key].email === email && users[key].password === password) {
          setUser({ uid: key, email });
          navigate('/dashboard');
          found = true;
          break;
        }
      }

      if (!found) {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account?{' '}
        <span className="auth-link" onClick={() => navigate('/signup')}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;