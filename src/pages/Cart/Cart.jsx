/* eslint-disable react/no-unescaped-entities */
import React from "react";
import bag from "../../assets/Cart.png";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full h-[100vh] items-center justify-center">
        <div className=" m-auto">
          <div className="cont object-cover h-[157px] w-[146px] m-auto">
            <img src={bag} alt="OPPS" style={{ mixBlendMode: "color-burn" }} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[#424553] text-[20px] font-bold m-auto">
              {" "}
              Hey, it feels so light !
            </h3>
            <p className="m-auto text-[14px] text-[#7e818c] mt-2 mb-5 font-sans">
              There is nothing in your bag. Let's add some item
            </p>
          </div>
          <div className="h-[41.6px] w-[211.5px] border-2 border-[#5a49e3] m-auto flex justify-center items-center ">
            <p
              className="text-[#5a49e3] font-bold cursor-pointer text-[14px]"
              onClick={() => {
                navigate("/login");
              }}
            >
              ADD ITEMS TO WISHLIST
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
