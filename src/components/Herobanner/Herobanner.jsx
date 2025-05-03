/* eslint-disable no-unused-vars */
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";

function Herobanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // setCurrentIndex((prevSlide) =>
    //   prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    // );
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    // Automatically advance to the next slide every 5000ms (5 seconds)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const slides = [
    {
      url: "https://sslimages.shoppersstop.com/sys-master/root/h64/h70/32117147140126/ss-web_270224d.jpg",
    },
    {
      url: "https://sslimages.shoppersstop.com/sys-master/root/hee/h47/32004481056798/And-Forever-New-Msite_89.jpg",
    },
    {
      url: "https://sslimages.shoppersstop.com/sys-master/root/h5a/h93/32015952183326/Msite_9390.jpg",
    },

    {
      url: "https://sslimages.shoppersstop.com/sys-master/root/h4d/h3a/32004481450014/Biba-%26-W-Msite_076.jpg",
    },
  ];
  return (
    <div className="max-w-[1400px] w-full mx-auto py-10 px-4 relative group">
  {/* background image container: height varies by breakpoint */}
  <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    className="
      w-full
      h-64        /* 16rem (256px) on very small phones */
      sm:h-80     /* 20rem on ≥640px */
      md:h-96     /* 24rem on ≥768px */
      lg:h-[600px]/* 600px on ≥1024px */
      xl:h-[700px]/* 700px on ≥1280px */
      rounded-2xl
      bg-center bg-cover
      ring-2 ring-gray-200
      shadow-2xl
    "
  >
    {/* overlay text, centered */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
      <h1 className="font-bold
        text-2xl       /* bumped from text-xl */
        sm:text-3xl    /* bumped from sm:text-2xl */
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
      ">
        {/* your title */}
      </h1>
      <p className="mt-3
        text-sm         /* bumped from text-xs */
        sm:text-base    /* bumped from sm:text-sm */
        md:text-lg
        lg:text-xl
        xl:text-2xl
        text-center
      ">
        {/* your subtitle */}
      </p>
    </div>
  </div>

  {/* arrows: show on hover, size adjusts */}
  <button
    onClick={prevSlide}
    className="
      hidden group-hover:flex
      absolute top-1/2 left-2
      transform -translate-y-1/2
      bg-black bg-opacity-50 rounded-full
      p-2       /* a tiny bit bigger touch‐area */
      text-white
    "
  >
    <ArrowBackIosIcon fontSize="medium" />
  </button>

  <button
    onClick={nextSlide}
    className="
      hidden group-hover:flex
      absolute top-1/2 right-2
      transform -translate-y-1/2
      bg-black bg-opacity-50 rounded-full
      p-2
      text-white
    "
  >
    <ArrowForwardIosIcon fontSize="medium" />
  </button>
</div>

  
  );
}

export default Herobanner;
