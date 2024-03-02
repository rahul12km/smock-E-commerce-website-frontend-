/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Login from "./pages/Login/Login";
import DetailPage from "./pages/DetailPage/DetailPage";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
