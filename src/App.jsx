import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoomManagementPage from "./pages/RoomManagementPage";
import DeviceManagementPage from "./pages/DeviceManagementPage";
import RoutineSchedulerPage from "./pages/RoutineSchedulerPage";
import EnergyDashboardPage from "./pages/EnergyDashboardPage";
import ManageRoomPage from "./pages/ManageRoomPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/rooms" element={<RoomManagementPage />} />
        <Route path="/dashboard/rooms/:room/manage" element={<DeviceManagementPage />} />
        <Route path="/dashboard/rooms/:room/details" element={<ManageRoomPage />} />
        <Route path="/schedule" element={<RoutineSchedulerPage />} />
        <Route path="/energy" element={<EnergyDashboardPage />} />

        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
