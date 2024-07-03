// file: src/components/Dashboard/Dashboard.tsx

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="dashboard">
        <div className="nested__nav">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="posts"
          >
            Posts
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="comments"
          >
            Comments
          </NavLink>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
