/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

const DetailPage = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
  }, []);
  return (
    <div className="container  ">
      {/* <Navbar /> */}

      <div className=" product-image  flex flex-row pl-5 gap-2 mt-[50px]">
        <img
          src="https://images.meesho.com/images/ratings_reviews/-763818620/-781892374/-763818620_-781892374_fdd45bd1fd56a_512.jpeg"
          alt=""
          className="w-[418px] h-[560px]"
        />
        <img
          src="https://images.meesho.com/images/ratings_reviews/-763818620/-781892374/-763818620_-781892374_8747ada103f28_512.jpeg"
          alt=""
          className="w-[418px] h-[560px]"
        />

        <div className="product-info ml-3">
          <h1 className="text-[24px] font-bold">Roadster</h1>

          <h2 className="text-[20px] text-[#8B8BA3] pb-3">
            {" "}
            Men's Striped Round Neck Teal Tracksuits
          </h2>
          <div className=" flex flex-row border-2 border-[#282c3f ] h-[29px] w-[159.733px] pl-[2px]  mb-3">
            <p className="text-[#282c3f] text-center">4.5</p>
            <p className="ml-2 color-[#03a685] text-center ">⭐</p>
            <p className="text-[#8B8BA3] ">|</p>
            <p className="">53.5k Ratings</p>
          </div>
          <div className=" flex flex-row border-t-2 border-[#d4d5d9] gap-2 ">
            <p className="font-bold  text-[24px] mt-2">Rs 714 </p>
            <p className="text-[#414452] text-[24px] mt-2">MRP</p>
            <p className=" text-[#414452] line-through text-[24px] mt-2">
              ₹1299
            </p>
            <span className="text-[#ff905a] font-semibold text-[24px] mt-2">
              (45% OFF)
            </span>
          </div>
          <p className="text-[14px] text-[#03a685] font-bold font-pop mt-2">
            inclusive of all taxes
          </p>

          <p className="font-bold text-[16px] mt-3 mb-2">SELECT SIZE</p>
          <div className="flex flex-row gap-3 cursor-pointer font-bold">
            <p className="w-[30px] h-[30px] bg-[#f5f5f6] text-[#8B8BA3] p-2 rounded-full  flex items-center justify-center  hover:text-black  ">
              S
            </p>
            <p className="w-[30px] h-[30px] bg-[#f5f5f6] text-[#8B8BA3] p-2 rounded-full flex items-center justify-center hover:text-black  ">
              M
            </p>
            <p className="w-[30px] h-[30px] bg-[#f5f5f6] text-[#8B8BA3] p-2 rounded-full flex items-center justify-center   hover:text-black ">
              L
            </p>
            <p className="w-[30px] h-[30px] bg-[#f5f5f6] text-[#8B8BA3] p-2 rounded-full flex items-center justify-center hover:text-black ">
              XL
            </p>
          </div>

          <div className=" flex flex-row gap-5 mt-4 border-b-2 ">
            <button className=" h-[53px] w-[190px] bg-[#5a49e3] text-white p-2 rounded-md font-semibold mb-5">
              Add to Cart
            </button>
            <button className="h-[53px] w-[190px] text-[#282c3f] border-2 border-[##d4d5d9] font-semibold bg-white p-2 rounded-md hover: border-2 hover:border-[#282c3f] mb-5">
              Wishlist
            </button>
          </div>

          <div className="flex flex-col mt-3 ">
            <p className="font-bold text-[16px] mb-3">DELIVERY OPTIONS</p>

            <div className="relative w-[250px]">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="h-[42.4px] w-[250px] rounded-md border-2 border-[#d4d5d9] p-2 outline-none"
              />

              <button
                type="button"
                className="top-0 right-0 px-4 py-2  h[42.4px] font-bold text-[#5a49e3] rounded-r-md  absolute"
              >
                Check
              </button>
            </div>
            <p className="mt-2 text-[#7f8383] text-[13px]">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <p className="text-[15px] mt-4 ">100% Original Products</p>
            <p className="text-[15px] mt-1">
              Pay on delivery might be available
            </p>
            <p className="text-[15px] mt-1">
              Easy 14 days returns and exchange
            </p>
            <p className="text-[15px] mt-1 mb-3">
              Try & Buy might be available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
