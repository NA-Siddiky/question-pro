import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar/Navbar";
import ProfileView from "../../components/Profile/ProfileView";
import "./Layout.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <NavbarComponent />
        <div className="main">
          <div className="row">{children}</div>
          <div className="row">
            <ProfileView />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Layout;
