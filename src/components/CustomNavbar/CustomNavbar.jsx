import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CustomNavbar = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <div className="output">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
