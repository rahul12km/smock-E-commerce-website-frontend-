/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import delivery from "../../assets/delivery.svg";
import payment from "../../assets/payment.svg";
import moneyback from "../../assets/moneyback.svg";
import online from "../../assets/onlinesupport.svg";
import ad1 from "../../assets/ad1.png";
import ad2 from "../../assets/ad2.jpg";
import MenOption from "../../components/DropOptions/MenOption";
function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Herobanner />
      <Banner />
      <Carousel />

      <div className="  flex rounded-xl mt-[103px] justify-center relative">
        <div className="flex flex-col right-60 top-[50%]  absolute text-white  ">
          <p className="text-[15px] font-bold  mx-auto">STYLE STAT / MARCH</p>
          <h1 className="text-[42px] font-bold font-sans">Summer Transition</h1>
          <h3 className="text-[18px] font- font-sans text-pretty mt-3 tracking-wide mx-auto">
            Bring out the heat this summer
          </h3>
          <button className="font-pop bg-white text-black font-bold mt-10 w-[100px] h-[35px] mx-auto hover:bg-[#E6E6E6]  hover:transition ">
            Shop Now
          </button>
        </div>

        <div className="  w-[70%]  m-auto   bg-cover ">
          <img className="rounded-xl h-[100%] w-[100%]" src={ad1} alt="" />
        </div>
      </div>

      <div className="  flex rounded-xl mt-[103px] justify-center relative">
        <div className="flex flex-col left-60 top-[50%]  absolute text-black ">
          <p className="text-[15px] font-bold  mx-auto">
            STYLE STAT / FEBRUARY
          </p>
          <h1 className="text-[42px] font-bold font-sans">Everyday Elegance</h1>
          <h3 className="text-[18px] font- font-sans text-pretty mt-3 tracking-wide mx-auto">
            Wardrobe refresh: basics
          </h3>

          <button className="font-pop bg-black text-white font-bold mt-10 w-[100px] h-[35px] mx-auto hover:bg-transparent border-2 border-black hover:text-black  hover:transition duration-400 ease-in-out ">
            Shop Now
          </button>
        </div>

        <div className="  w-[70%]  m-auto   bg-cover ">
          <img className="rounded-xl h-[100%] w-[100%]" src={ad2} alt="" />
        </div>
      </div>

      <div className="flex flex-row px-20  justify-between   mt-20  py-10 bg-[#F5F7FA]">
        <div className="flex flex-col items-center ">
          <img src={delivery} className="h-[60px] w-[70px] mb-4" />
          <p className="font-bold text-[20px] mb-2">Fast and Free Delivery</p>
          <p className="text-[#57667e]">Free Delivery on all orders</p>
        </div>
        <div className="flex flex-col items-center  ">
          <img src={payment} alt="" className="h-[60px] w-[70px] mb-4" />
          <p className="font-bold text-[20px] mb-2">Secure Payment</p>
          <p className="text-[#57667e]">Secured Payment Integration</p>
        </div>
        <div className="flex flex-col items-center  ">
          <img src={moneyback} alt="" className="h-[60px] w-[70px] mb-4" />
          <p className="font-bold text-[20px] mb-2">Money Back Guarantee</p>
          <p className="text-[#57667e]">100% Assured Money back guarantee</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={online} alt="" className="h-[60px] w-[70px] mb-4" />
          <p className="font-bold text-[20px] mb-2">Online Support</p>
          <p className="text-[#57667e]">24x7 Online Support Available</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
