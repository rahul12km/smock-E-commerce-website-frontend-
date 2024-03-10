import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CustomNavbar = () => {
  return (
    <div className="container" ref={parent}>
      <Navbar />
      <div className="main-container" ref={parent}>
        <div className="output" ref={parent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
