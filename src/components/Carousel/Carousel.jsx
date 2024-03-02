import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useRef } from "react";

const Carousel = () => {
  const carouselContainer = useRef();
  const [isMouse, setIsMouse] = useState(false);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(isMouse);
    let intervalId;
    if (isMouse === false) {
      intervalId = setInterval(() => {
        const container = carouselContainer.current;

        console.log(container.scrollWidth);

        const scrollAmount =
          container.scrollLeft + (container.offsetWidth + 20) <=
          container.scrollWidth
            ? container.scrollLeft + (container.offsetWidth + 20)
            : 0;
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [isMouse]);

  return (
    <div className="Carousel-container ">
      <div className="title-text  text-black px-[140px] font-bold mt-[50px] text-[40px]">
        Trending this week
      </div>
      <div className="Carousel relative ">
        <div
          className="carousel-items flex  mx-20 my-10 width-[400px] max-sm:mx-10 overflow-x-hidden px-5 "
          onMouseEnter={() => {
            setIsMouse(true);
          }}
          onMouseLeave={() => {
            setIsMouse(false);
          }}
          ref={carouselContainer}
        >
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 max-sm:h-[250px] max-sm:w-[200px]  flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 max-sm:mx-6 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
          <div className="carousel-item h-[300px] min-w-[250px] border-2  border-gray-400  mx-10 flex flex-col  shadow-lg rounded-md">
            <div className="img ">
              <img
                src="https://www.biancajeswant.com/cdn/shop/files/7_ff496133-bdf0-4ee6-af6a-4963a2c51465.jpg?v=1695194728"
                className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md"
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-black text-center">T-Shirt</div>
              <div className="text-gray-400 text-center">$120</div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[135px] right-10 z-1 hover:text-purple-700 cursor-pointer"
          onClick={() => navigation("right")}
        >
          <ArrowForwardIosIcon />
        </div>
        <div
          className="absolute top-[135px] left-10 z-1 hover:text-purple-700 cursor-pointer"
          onClick={() => navigation("left")}
        >
          <ArrowBackIosIcon />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
