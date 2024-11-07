import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Layout.style.scss";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main id="generalApp">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
