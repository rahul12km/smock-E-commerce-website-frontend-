import React from "react";
import { useNavigate } from "react-router-dom";
const LogindropOption = () => {
  const navigate = useNavigate();
  return (
    <div className="flex container">
      <div className="flex flex-col ">
        <p className="font-semibold text-[#282c3f] text-[12px] ">Welcome</p>
        <p className="mt-[2px] ">To access your orders and wishlist</p>
        <p
          className="mt-[20px] text-[#5a49e3] border-[1px] border-[#d5d4d9] font-bold hover:border-[1px] hover:border-[#5a49e3] flex items-center justify-center p-2"
          onClick={() => navigate("/otp")}
        >
          LOGIN/SIGNUP
        </p>
      </div>
    </div>
  );
};

export default LogindropOption;
