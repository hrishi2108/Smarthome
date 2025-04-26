import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await api.post('/users.json', { email, password });
      if (res.status === 200) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account?{' '}
        <span className="auth-link" onClick={() => navigate('/login')}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
