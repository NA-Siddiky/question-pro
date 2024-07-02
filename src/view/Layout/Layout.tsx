import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import "./Layout.scss";

const Layout: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Profile />
    </>
  );
};

export default Layout;
