import React, { useState } from 'react';

function DeviceManagementPage() {
  const [devices, setDevices] = useState([]);

  const addDevice = () => {
    const deviceName = prompt('Enter device name (e.g., Fan, AC)');
    if (deviceName) {
      setDevices([...devices, deviceName]);
    }
  };

  return (
    <div className="device-management-container">
      <h2>Manage Devices</h2>
      <button onClick={addDevice}>Add Device</button>
      <div className="device-list">
        {devices.length === 0 ? (
          <p>No devices added yet.</p>
        ) : (
          devices.map((device, index) => (
            <div key={index} className="device-item">
              <h3>{device}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DeviceManagementPage;
