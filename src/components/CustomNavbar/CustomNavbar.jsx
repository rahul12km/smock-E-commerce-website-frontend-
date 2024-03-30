import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const CustomNavbar = () => {
  return (
    <ErrorBoundary>
      <div className="container">
        <Navbar />
        <div className="main-container">
          <div className="output">
            <Outlet />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CustomNavbar;
