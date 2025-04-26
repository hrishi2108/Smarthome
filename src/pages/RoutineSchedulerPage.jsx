import React, { useState } from 'react';

function RoutineSchedulerPage() {
  const [schedules, setSchedules] = useState([]);

  const addSchedule = () => {
    const device = prompt('Enter device name (e.g., Fan, AC)');
    const time = prompt('Enter time (e.g., 7:00 AM)');
    if (device && time) {
      setSchedules([...schedules, { device, time }]);
    }
  };

  return (
    <div className="routine-scheduler-container">
      <h2>Routine Scheduler</h2>
      <button onClick={addSchedule}>Add Schedule</button>
      <div className="schedule-list">
        {schedules.length === 0 ? (
          <p>No schedules set yet.</p>
        ) : (
          schedules.map((schedule, index) => (
            <div key={index} className="schedule-item">
              <h3>{schedule.device} at {schedule.time}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RoutineSchedulerPage;
