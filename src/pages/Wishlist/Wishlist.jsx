/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";

const Wishlist = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="flex flex-col mx-[60px] mt-[48px]">
        <div className="flex  gap-2 pb-8">
          <h1 className="text-[#282c3f] text-[18px] font-semibold">
            My Wishlist
          </h1>
          <p className="text-[#282c3f] text-[18px] ">3 items</p>
        </div>
        <div className="grid grid-cols-5 gap-10 ">
          <div className=" card flex flex-col  border-[#e9e9eb] border-[1px]  relative">
            <div className="absolute  flex justify-center items-center h-[24px] w-[24px] rounded-full right-2 top-2 bg-[#d4d5d9]  cursor-pointer bg-opacity-[50%]">
              <CloseIcon className="text-[#434343]" />
            </div>
            <div className="image-cont      ">
              <img
                src="https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/26843802/2024/1/9/24a52386-6619-429f-9a20-7cb5ad2a992a1704815417049PowerlookMenWhiteSemiSheerPrintedCasualShirt1.jpg"
                alt=""
                className="h-[294px ] w-[251.2px]"
              />
            </div>
            <div className="price-cont h-[94px] border-t-[1px] border[#e9e9eb] flex flex-col justify-center">
              <h1 className="mx-auto text-[16px] ">Men's Striped Round Neck</h1>
              <div className="flex flex-row gap-2 mx-auto">
                <p className="text-[16px] font-semibold text-[#282c3f] ">
                  Rs.1,079
                </p>
                <p className="text-[12px] line-through pt-[4.5px] text-[#8e8e8e]">
                  Rs.2000
                </p>

                <p className="text-[12px] text-[#ff905a] pt-[2.5px] font-[700]">
                  (45% OFF)
                </p>
              </div>
            </div>
            <div className="mov-btn h-[46px]  text-[14px] text-[#5a49e3] flex  justify-center items-center border-t-[1px] border[#e9e9eb]">
              <p className="m-auto font-[700] cursor-pointer">MOVE TO BAG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
