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
    <div className="max-w-[1400px] lg:h-[700px]  max-sm:h-[380px] w-full m-auto py-10 px-4 relative group  ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="relative w-full h-full rounded-2xl bg-center bg-cover  ring-2 ring-gray-200 shadow-2xl "
      >
        <div className="flex flex-col items-center justify-center w-full absolute m-auto top-[50%] text-white z-10">
          <h1 className=" heading text-4xl font-bold  "></h1>
          <p className=" heading text-lg text-center "></p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className=" h-[48px] w-[48px] hidden   group-hover:block absolute top-[50%]  rounded-full translate-x-0 translate-y-[-50%] left-5 text-2xl  p-3 text-white cursor-pointer bg-black">
        <ArrowBackIosIcon onClick={prevSlide} className="m-auto absolute " />
      </div>

      {/* Right Arrow */}

      <div className="h-[48px] w-[48px]  hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 text-white cursor-pointer bg-black">
        <ArrowForwardIosIcon onClick={nextSlide} className="m-auto absolute " />
      </div>
    </div>
  );
}

export default Herobanner;
