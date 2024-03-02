import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState, useRef, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [Typelist, setTypelist] = useState([]);
  const navigate = useNavigate();

  const clothing_types = ["T-shirt", "Jeans", "Dress", "Skirt"];

  const [selected, setSelected] = useState({
    Category: false,
    Sort: false,
    Color: false,
    Size: false,
    Price: false,
  });

  const [wish, setWish] = useState(false);
  const imgSource =
    "https://www.beyours.in/cdn/shop/files/classic-black-shirt-1_1200x1200_crop_center.jpg?v=1696433287";
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const handleFilterClick = (filterName) => {
    setSelected((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const insertList = (c) => {
    if (Typelist.includes(c)) {
      setTypelist((prevList) => prevList.filter((item) => item !== c));
    } else {
      setTypelist((prevList) => [...prevList, c]);
    }
  };

  useEffect(() => {
    console.log(Typelist);
  }, [Typelist]);

  return (
    <div className="main-box flex flex-col">
      <Navbar />

      <div className="flex flex-row  justify-end py-3 mr-[50px]">
        <div className="flex flex-col relative">
          <div
            className="w-[150px] h-[40px] bg-white border-[1px] border-gray-300 flex justify-between "
            onClick={() => handleFilterClick("Sort")}
          >
            <div className="flex items-center">
              <p className="ml-2">Sort By</p>
            </div>
            <div
              className={`text-gray-400 flex items-center transition-transform duration-500 ${
                selected.Sort === true ? " rotate-180" : ""
              }`}
            >
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div
            className={`${
              selected.Sort === true ? "flex" : "hidden"
            } flex-col w-full z-20 absolute justify-center top-[40px] bg-white border-[1px] border-t-[0px] border-gray-300 transition-all duration-500`}
          >
            <p className="m-auto">High to low </p>
            <p className="m-auto">Low to High</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-row">
        {/**------------------ filter-box**-----------------------------------------------------------------------------**/}

        <div className="filter flex flex-col w-[400px] h-[fit-content] bg-whitesmoke rounded-md ml-6  py-8 my-3 border-[1px] border-gray-300 ">
          <div className="flex  w-[250] h-[40] justify-between items-center mx-3 border-b-[2px] border-gray-400  pb-5">
            <p className="font-bold ml-1">Filters </p>
            <p className="text-[#5a49e3] font-bold cursor-pointer">Clear All</p>
          </div>

          {/*---------------------------------- Category--------------------------------------------------- */}
          <div className="flex flex-col mx-3  border-b-[1px] border-gray-400 mt-2 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-6"
              onClick={() => handleFilterClick("Category")}
            >
              <div className="flex items-center">
                <p className="ml-2">Category</p>
              </div>
              <div
                className={`text-gray-400 flex items-center transition-transform duration-500 ${
                  selected.Category === true ? " rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div
              className={`${
                selected.Category === true ? "flex" : "hidden"
              } w-full h-[450px] bg-red-400 mb-2`}
            ></div>
          </div>
          {/*--------------------------------------------------- COLOR------------------------------------------------------------------------ */}
          <div className="flex flex-col mx-3 border-b-[1px] border-gray-400 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-7"
              onClick={() => handleFilterClick("Color")}
            >
              <div className="flex items-center">
                <p className="ml-2">Color</p>
              </div>
              <div
                className={`text-gray-400 flex items-center transition-transform duration-500 ${
                  selected.Color === true ? " rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div
              className={`${
                selected.Color === true ? "flex" : "hidden"
              } w-full h-[450px] bg-red-400 mb-2`}
            ></div>
          </div>
          {/*----------------------------------------------------------- size-------------------------------------------------------------------------- */}
          <div className="flex flex-col mx-3 border-b-[1px] border-gray-400 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-7"
              onClick={() => handleFilterClick("Size")}
            >
              <div className="flex items-center">
                <p className="ml-2">Size</p>
              </div>
              <div
                className={`text-gray-400 flex items-center transition-transform duration-500 ${
                  selected.Size === true ? " rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div
              className={`${
                selected.Size === true ? "flex" : "hidden"
              } w-full h-[450px] bg-red-400 mb-2`}
            ></div>
          </div>
          {/*------------------------------------------------------------------------ Price------------------------------------------------------------------------------- */}
          <div className="flex flex-col mx-3 border-b-[1px] border-gray-400 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-7"
              onClick={() => handleFilterClick("Price")}
            >
              <div className="flex items-center">
                <p className="ml-2">Price</p>
              </div>
              <div
                className={`text-gray-400 flex items-center transition-transform duration-500 ${
                  selected.Price === true ? " rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div
              className={`${
                selected.Price === true ? "flex" : "hidden"
              } w-full h-[450px] bg-red-400 mb-2`}
            ></div>
          </div>
        </div>

        {/*----------------------------------------------------------- card content -------------------------------------------------------------*/}

        <div className="content-box px-[50px] py-5 w-full h-full">
          <div className="item-cards grid grid-cols-4  gap-x-7 gap-y-10 ">
            {nums.map((num, i) => (
              <div
                key={i}
                className="item-card flex flex-col group "
                onClick={() => {
                  navigate("/details");
                }}
              >
                <div className="img-box h-[300px] relative overflow-hidden ">
                  <img
                    src={imgSource}
                    alt="Loading"
                    className="h-full w-full object-cover"
                  />
                  <div className=" absolute flex bg-white bottom-[-20%] border-t-[1px] border-b-[1px] border-[#5a49e3] w-full h-[40px]  transition-transform duration-[400ms] transform group-hover:translate-y-[-150%]">
                    <div
                      className="w-[50%] flex justify-center items-center border-r-[1px] border-[#5a49e3] hover:text-[#5a49e3] cursor-pointer "
                      onClick={() => {
                        setWish(!wish);
                      }}
                    >
                      {" "}
                      {wish !== true ? (
                        <>
                          <FavoriteBorderIcon className="" />
                        </>
                      ) : (
                        <>
                          <FavoriteIcon className="animate-shake text-[#5a49e3]" />
                        </>
                      )}
                    </div>
                    <div className="w-[50%] flex justify-center items-center hover:text-[#5a49e3] cursor-pointer">
                      <ShoppingCartIcon />
                    </div>
                  </div>
                </div>
                <div className="price-box h-[75px] bg-gray-100 pl-3 pt-2">
                  <h3 className="text-[15px] font-bold">Brand Name</h3>
                  <p className="text-[13px] text-[#535665]">Slim Fit T Shirt</p>
                  <p className="text-[14px] font-bold">Rs 500</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
