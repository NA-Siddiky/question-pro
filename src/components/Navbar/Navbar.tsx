// file: src/Navbar.tsx

import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Nav className="me-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/my-component" className="nav-link">
          My Component
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
