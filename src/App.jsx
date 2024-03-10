/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Login from "./pages/Login/Login";
import DetailPage from "./pages/DetailPage/DetailPage";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/WIshlist/Wishlist";
import SizeModal from "./components/modal/SizeModal";
import QuantityModal from "./components/modal/QuantityModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/qty" element={<QuantityModal />} />
      </Routes>
    </Router>
  );
}

export default App;
