/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
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

      <div className="max-w-[1400px] w-full mx-auto py-10 px-4">
  {/* ————————————————————————
       Small screens: text below image
     ———————————————————————— */}
  <div className="block md:hidden text-center mb-6">
    <p className="text-sm font-bold">STYLE STAT / MARCH</p>
    <h1 className="text-2xl font-bold mt-2">Summer Transition</h1>
    <h3 className="text-base mt-1">Bring out the heat this summer</h3>
    <button className="mt-4 bg-white text-black font-bold px-5 py-2 rounded hover:bg-gray-200 transition">
      Shop Now
    </button>
  </div>

  {/* ————————————————————————
       Image container (always)
       + overlay text only on md+
     ———————————————————————— */}
  <div className="relative w-full md:w-3/4 mx-auto">
    <img
      src={ad1}
      alt="Summer Transition Banner"
      className="rounded-2xl w-full h-auto object-cover shadow-2xl ring-2 ring-gray-200"
    />

    {/* overlay text: hidden on small, shown on md+ */}
    <div className="hidden md:flex absolute inset-0 items-center justify-end pr-12 text-right text-white">
      <div className="bg-black bg-opacity-50 p-6 rounded-md">
        <p className="text-base font-bold">STYLE STAT / MARCH</p>
        <h1 className="text-4xl font-bold mt-1">Summer Transition</h1>
        <h3 className="text-lg mt-2">Bring out the heat this summer</h3>
        <button className="mt-4 bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  </div>
</div>

{/* Everyday Elegance Banner (February) */}
<div className="max-w-[1400px] w-full mx-auto py-10 px-4">
  {/* Image container with text overlay */}
  <div className="relative w-full md:w-3/4 max-w-[1000px] mx-auto">
    <img
      className="rounded-xl w-full h-auto object-cover"
      src={ad2}
      alt="Everyday Elegance Banner"
    />

    {/* Text overlay for medium and larger screens */}
    <div className="hidden md:flex absolute inset-0 items-center justify-start pl-12 text-left text-black">
      <div className="bg-black bg-opacity-0 p-6 rounded-md">
        <p className="text-base font-bold">STYLE STAT / FEBRUARY</p>
        <h1 className="text-4xl font-bold mt-1">Everyday Elegance</h1>
        <h3 className="text-lg mt-2">Wardrobe refresh: basics</h3>
        <button className="mt-4 bg-black text-white font-bold px-6 py-2 border-2 border-white hover:bg-transparent hover:text-black transition rounded">
          Shop Now
        </button>
      </div>
    </div>
  </div>

  {/* Text below image for small screens */}
  <div className="block md:hidden text-center mt-6">
    <p className="text-sm font-bold">STYLE STAT / FEBRUARY</p>
    <h1 className="text-2xl font-bold mt-2">Everyday Elegance</h1>
    <h3 className="text-base mt-1">Wardrobe refresh: basics</h3>
    <button className="mt-4 bg-black text-white font-bold px-5 py-2 border-2 border-black hover:bg-transparent hover:text-black transition rounded">
      Shop Now
    </button>
  </div>
</div>




      <div className="flex flex-col md:flex-row px-6 md:px-20 justify-between gap-10 mt-10 md:mt-20 py-10 bg-[#F5F7FA]">
  <div className="flex flex-col items-center text-center">
    <img src={delivery} className="h-[60px] w-[70px] mb-4" />
    <p className="font-bold text-lg md:text-xl mb-2">Fast and Free Delivery</p>
    <p className="text-[#57667e] text-sm md:text-base">Free Delivery on all orders</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img src={payment} alt="" className="h-[60px] w-[70px] mb-4" />
    <p className="font-bold text-lg md:text-xl mb-2">Secure Payment</p>
    <p className="text-[#57667e] text-sm md:text-base">Secured Payment Integration</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img src={moneyback} alt="" className="h-[60px] w-[70px] mb-4" />
    <p className="font-bold text-lg md:text-xl mb-2">Money Back Guarantee</p>
    <p className="text-[#57667e] text-sm md:text-base">100% Assured Money back guarantee</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <img src={online} alt="" className="h-[60px] w-[70px] mb-4" />
    <p className="font-bold text-lg md:text-xl mb-2">Online Support</p>
    <p className="text-[#57667e] text-sm md:text-base">24x7 Online Support Available</p>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
