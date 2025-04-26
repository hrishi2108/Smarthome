import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Smart Home Manager</h1>
      <button onClick={handleClick}>Go to Dashboard</button>
    </div>
  );
}

export default Home;
