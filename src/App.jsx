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
import RemoveModal from "./components/modal/RemoveModal";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar/Navbar";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import PhoneSignUP from "./components/PhoneSignUp/PhoneSignUP";
import Erorr404 from "./pages/404/404";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <LoadingBar
          color="#5a49e3"
          progress={progress}
          height={3.5}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<CustomNavbar />}>
            <Route index element={<Home />} />
            <Route path="men" element={<Men setProgress={setProgress} />} />
          </Route>

          <Route
            path="/login/:id"
            element={<Login setProgress={setProgress} />}
          />
          <Route
            path="/details"
            element={<DetailPage setProgress={setProgress} />}
          />

          <Route path="/cart" element={<Cart setProgress={setProgress} />} />
          <Route
            path="/wishlist"
            element={<Wishlist setProgress={setProgress} />}
          />
          <Route
            path="/otp"
            element={<PhoneSignUP setProgress={setProgress} />}
          />

          <Route path="/*" element={<Erorr404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
