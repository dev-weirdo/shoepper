import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function DashboardLayout() {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
