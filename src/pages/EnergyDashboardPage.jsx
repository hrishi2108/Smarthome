import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Energy Usage (kWh)',
      data: [10, 15, 8, 13, 18], // You can replace this with real data
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }
  ]
};

function EnergyDashboardPage() {
  return (
    <div className="energy-dashboard-container">
      <h2>Energy Dashboard</h2>
      <Line data={data} />
      <div className="energy-details">
        <h3>Energy Stats</h3>
        <p>Total Energy Consumed: 64 kWh</p> {/* Add dynamic data */}
        <p>Average Daily Usage: 12.8 kWh</p>
      </div>
    </div>
  );
}

export default EnergyDashboardPage;
