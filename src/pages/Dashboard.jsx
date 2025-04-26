import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Smart Home Dashboard</h1>
      <div className="dashboard-buttons">
        <Link to="/dashboard/rooms">
          <button className="dashboard-button">Add Room</button>
        </Link>
        <Link to="/dashboard/scheduler">
          <button className="dashboard-button">Schedule</button>
        </Link>
        <Link to="/dashboard/energy">
          <button className="dashboard-button">Energy Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
