// file: src/Navbar.tsx

import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

const NavbarComponent: React.FC = () => {
  const localtion = useLocation();
  const path = localtion.pathname === "/dashboard/comments";

  return (
    <Navbar data-bs-theme="light" className="navbar">
      <Nav className="me-auto">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive || path ? "active" : "";
          }}
          to={"/dashboard/posts"}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/my-component"
        >
          My Component
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
