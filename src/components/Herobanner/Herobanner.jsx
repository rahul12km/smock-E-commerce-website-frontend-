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
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  return (
    <div className="max-w-[1400px] lg:h-[700px]  max-sm:h-[380px] w-full m-auto py-10 px-4 relative group  ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" relative w-full h-full rounded-2xl bg-center bg-cover  "
      >
        <div className="flex flex-col items-center justify-center w-full absolute m-auto top-[50%] text-white z-10">
          <h1 className=" heading text-4xl font-bold  ">New Collection</h1>
          <p className=" heading text-lg text-center ">Get your new style</p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 text-white cursor-pointer">
        <ArrowBackIosIcon onClick={prevSlide} />
      </div>
      {/* Right Arrow */}

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 text-white cursor-pointer">
        <ArrowForwardIosIcon onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Herobanner;
