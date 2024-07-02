import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Layout.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <NavbarComponent />
        <div className="main">{children}</div>
      </Container>
    </>
  );
};

export default Layout;
