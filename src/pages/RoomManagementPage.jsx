import React, { useState } from 'react';

function RoomManagementPage() {
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    const roomName = prompt('Enter room name (e.g., Kitchen, Bedroom)');
    if (roomName) {
      setRooms([...rooms, roomName]);
    }
  };

  return (
    <div className="room-management-container">
      <h2>Manage Rooms</h2>
      <button onClick={addRoom}>Add Room</button>
      <div className="room-list">
        {rooms.length === 0 ? (
          <p>No rooms added yet.</p>
        ) : (
          rooms.map((room, index) => (
            <div key={index} className="room-item">
              <h3>{room}</h3>
              <button className="manage-button">Manage</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RoomManagementPage;
