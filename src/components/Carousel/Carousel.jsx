import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getProducts } from "../../Actions/ProductAction";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.product);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const carouselContainer = useRef();
  const [isMouse, setIsMouse] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (status === "fulfilled") {
      console.log(data);
      setItems(data);
    }
  }, [status, data]);

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
    let intervalId;
    if (isMouse === false) {
      intervalId = setInterval(() => {
        const container = carouselContainer.current;

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
    <div className="Carousel-container  ">
      <div className="title-text  text-black px-[140px] font-bold mt-[50px] text-[40px]">
        Trending this week
      </div>
      <div className="Carousel relative ">
        <div
          className="carousel-items flex  mx-20 my-10  max-sm:mx-10 overflow-x-hidden px-5 "
          onMouseEnter={() => {
            setIsMouse(true);
          }}
          onMouseLeave={() => {
            setIsMouse(false);
          }}
          ref={carouselContainer}
        >
          {items?.map((item) => (
            <div
              key={item._id}
              className="carousel-item  min-w-[300px] border-2 border-gray-400 mx-10 max-sm:h-[250px] max-sm:w-[200px] flex flex-col cursor-pointer shadow-lg rounded-md"
              onClick={() => {
                navigate(`/details/${item._id}`);
              }}
            >
              <div className="img">
                <img
                  src={item.image[0]}
                  className="h-[250px] w-[100%] object-cover rounded-tl-md rounded-tr-md "
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-black text-center">{item.name}</div>
                <div className="text-gray-400 text-center">
                  ₹ {item.retailPrice}
                </div>
              </div>
            </div>
          ))}
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
