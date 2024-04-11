import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState, useRef, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useFilter from "../../Custom Hooks/Filter";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../Actions/CartAction";
import { useDispatch } from "react-redux";
import { addWishlist, fetchWishlist } from "../../Actions/WishlistAction";
import LazyLoad from "react-lazyload";

const Layout = ({ Data }) => {
  const [Typelist, setTypelist] = useState([]);
  const [wish, setWish] = useState(false);
  const [colourList, setColourList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [sortBy, setSortBy] = useState("Sort By");
  const priceRange = [
    { id: 0, min: 300, max: 500 },
    { id: 1, min: 500, max: 1000 },
    { id: 2, min: 1000, max: 2000 },
    { id: 3, min: 2000, max: 5000 },
    { id: 4, min: 5000, max: 10000 },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({
    Category: false,
    Sort: false,
    Color: false,
    Brand: false,
    Price: false,
  });

  const { data, addFilter, removeFilter, resetFilters } = useFilter(Data);

  const getUniqueData = (field) => {
    let labellist = Data.map((item) => item[field]);
    return [...new Set(labellist)];
  };

  const handleFilterClick = (filterName) => {
    setSelected((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const sortFnc = (d) => {
    const shallowData = [...d];
    if (sortBy === "Sort By") {
      return shallowData;
    } else {
      if (sortBy === "High to Low") {
        return shallowData.sort((a, b) => b.retailPrice - a.retailPrice);
      } else {
        return shallowData.sort((a, b) => a.retailPrice - b.retailPrice);
      }
    }
  };

  //========================================================filter defining function=============================================//
  const filterFunctionColour = (operand, item) => operand.includes(item.colour);
  const filterFunctionBrand = (operand, item) => operand.includes(item.brand);
  const filterFunctionPrice = (operand, item) => {
    operand.sort((a, b) => a.max - b.max);
    if (
      item.retailPrice >= operand[0].min &&
      item.retailPrice <= operand[operand.length - 1].max
    ) {
      return item;
    }
  };

  useEffect(() => {
    resetFilters();
    if (colourList.length > 0) {
      addFilter({ operand: colourList, opcode: filterFunctionColour });
    }
    if (brandList.length > 0) {
      addFilter({ operand: brandList, opcode: filterFunctionBrand });
    }
    if (priceList.length > 0) {
      addFilter({ operand: priceList, opcode: filterFunctionPrice });
    }
  }, [colourList, brandList, priceList]);

  //=========================================================Inserting in list functions==========================================//
  const insertTypeList = (c) => {
    if (Typelist.includes(c)) {
      setTypelist((prevList) => prevList.filter((item) => item !== c));
    } else {
      setTypelist((prevList) => [...prevList, c]);
    }
  };

  const insertBrandList = (b) => {
    if (brandList.includes(b)) {
      setBrandList((prevList) => prevList.filter((item) => item !== b));
    } else {
      setBrandList((prevList) => [...prevList, b]);
    }
  };
  const insertColourList = (c) => {
    if (colourList.includes(c)) {
      setColourList((prevList) => prevList.filter((item) => item !== c));
    } else {
      setColourList((prevList) => [...prevList, c]);
    }
    console.log(colourList);
  };
  const insertPriceList = (p) => {
    const isExisting = priceList.some((item) => item.id === p.id);
    if (isExisting) {
      setPriceList((prevList) => prevList.filter((item) => item.id !== p.id));
    } else {
      setPriceList((prevList) => [...prevList, p]);
    }
  };

  //================================================================Adding function to cart and wishlist =====================================//

  const addtocartfnc = (id) => {
    const body = {
      productId: id,
      userId: "65f57ed8b82e228293243a64",
      count: 1,
      size: "",
    };
    dispatch(addCart(body));
  };

  const addtoWishlistfnc = (id) => {
    const body = {
      productId: id,
      userId: "65f57ed8b82e228293243a64",
    };
    dispatch(addWishlist(body));
  };

  //==========================================================UseEffects=========================================================//

  // useEffect(() => {
  //   console.log(colourList);
  //   addFilter(filterByColour);
  // }, [colourList]);

  //--------------------------------------------------------HTML BODY-----------------------------------------------------------//

  return (
    <div className="main-box flex flex-col">
      {/* <Navbar /> */}

      <div className="flex flex-row  justify-end py-3 mr-[50px]">
        <div className="flex flex-col relative">
          <div
            className="w-[150px] h-[40px] bg-white border-[1px] border-gray-300 flex justify-between "
            onClick={() => handleFilterClick("Sort")}
          >
            <div className="flex items-center">
              <p className="ml-2 ">{sortBy}</p>
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
            // onMouseLeave={handleFilterClick("Sort")}
            className={`${
              selected.Sort === true ? "flex" : "hidden"
            } flex-col w-full z-20 absolute justify-center top-[40px] bg-white border-[1px] border-t-[0px] border-gray-300 transition-all duration-500 `}
          >
            <div className=" flex  items-center w-full justify-center  hover:bg-[#ededef]">
              <p
                className="m-auto cursor-pointer"
                onClick={() => setSortBy("High to Low")}
              >
                High to low{" "}
              </p>
            </div>
            <div className="flex items-center w-full justify-center hover:bg-[#ededef]">
              <p
                className="m-auto cursor-pointer "
                onClick={() => setSortBy("Low to High")}
              >
                Low to High
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row">
        {/**----------------------------------- filter-box**-----------------------------------------------------------------------------**/}

        <div className="filter flex flex-col w-[400px] h-[fit-content] bg-whitesmoke rounded-md ml-6  py-8 my-3 border-[1px] border-gray-300 ">
          <div className="flex  w-[250] h-[40] justify-between items-center mx-3 border-b-[2px] border-gray-400  pb-5">
            <p className="font-bold ml-1">Filters </p>
            <p className="text-[#5a49e3] font-bold cursor-pointer">Clear All</p>
          </div>

          {/*---------------------------------- fiter box Category--------------------------------------------------- */}
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
              } w-full h-[450px] bg-red-400 mb-2  overflow-scroll flex-wrap `}
            >
              {}
            </div>
          </div>

          {/*---------------------------------------------------filter box COLOR------------------------------------------------------------------------ */}

          <div className="flex flex-col mx-3 border-b-[1px] border-gray-400 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-7"
              onClick={() => handleFilterClick("Color")}
            >
              <div className="flex items-center">
                <p className="ml-2">Colour</p>
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
              } w-full   mb-2 mx-3 `}
            >
              <div className="w-full flex flex-col ml-2  gap-2">
                {getUniqueData("colour").map((color, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`color_${index}`}
                      name={`color_${index}`}
                      value={color}
                      onClick={() => insertColourList(color)}
                      // onChange={(e) => handleColorChange(e.target.value)}
                      className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:border-indigo-300 ml-3"
                    />
                    <span
                      className="h-[15px] w-[15px] rounded-full "
                      style={{ backgroundColor: color }}
                    ></span>
                    <label className="text-sm">{color}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*-----------------------------------------------------------filter Brand-------------------------------------------------------------------------- */}

          <div className="flex flex-col mx-3 border-b-[1px] border-gray-400 ">
            <div
              className="w-[250px] h-[40px] bg-white  flex justify-between py-7"
              onClick={() => handleFilterClick("Brand")}
            >
              <div className="flex items-center">
                <p className="ml-2">Brand</p>
              </div>
              <div
                className={`text-gray-400 flex items-center transition-transform duration-500 ${
                  selected.Brand === true ? " rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div
              className={`${
                selected.Brand === true ? "flex" : "hidden"
              } w-full mx-3 mb-2`}
            >
              <div className="w-full flex flex-col ml-2  gap-2">
                {getUniqueData("brand").map((brand, index) => (
                  <div key={index} className="flex items-center space-x-2 ">
                    <input
                      type="checkbox"
                      id={`brand_${index}`}
                      name={`brand_${index}`}
                      value={brand}
                      onClick={() => insertBrandList(brand)}
                      // onChange={(e) => handleColorChange(e.target.value)}
                      className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:border-indigo-300 ml-3"
                    />
                    <label className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*------------------------------------------------------------------------ filter-box Price------------------------------------------------------------------------------- */}
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
              } w-full mx-3  mb-2`}
            >
              <div className="w-full flex flex-col ml-2  gap-2">
                {priceRange.map((price, index) => (
                  <div key={index} className="flex items-center space-x-2 ">
                    <input
                      type="checkbox"
                      id={`price_${index}`}
                      name={`price_${index}`}
                      value={price}
                      onClick={() => insertPriceList(price)}
                      // onChange={(e) => handleColorChange(e.target.value)}
                      className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:border-indigo-300 ml-3"
                    />
                    <label className="text-sm">
                      ₹ {price.min} - ₹ {price.max}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*-----------------------------------------------------------  Product card content -------------------------------------------------------------*/}

        <div className="content-box px-[50px] py-5 w-full h-full">
          <div className="item-cards grid grid-cols-4  gap-x-7 gap-y-10 ">
            {sortFnc(data)?.map((item, i) => (
              <LazyLoad key={item._id} height={200} offset={100}>
              <div key={item._id} className="item-card flex flex-col group animate-fadeIn ">
                <div className="img-box h-[300px] relative overflow-hidden ">
                  <img
                    src={item.image[0]}
                    alt="Loading"
                    className="h-full w-full object-cover"
                    onClick={() => {
                      navigate(`/details/${item._id}`);
                    }}
                  />
                  <div className=" absolute flex bg-white bottom-[-20%] border-t-[1px] border-b-[1px] border-[#5a49e3] w-full h-[40px]  transition-transform duration-[400ms] transform group-hover:translate-y-[-150%]">
                    <div
                      className="w-[50%] flex justify-center items-center border-r-[1px] border-[#5a49e3] hover:text-[#5a49e3] cursor-pointer "
                      onClick={() => {
                        addtoWishlistfnc(item._id);
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
                          <FavoriteIcon className=" text-[#5a49e3]" />
                        </>
                      )}
                    </div>
                    <div
                      className="w-[50%] flex justify-center items-center hover:text-[#5a49e3] cursor-pointer"
                      onClick={() => addtocartfnc(item._id)}
                    >
                      <ShoppingCartIcon />
                    </div>
                  </div>
                </div>
                <div
                  className="price-box h-[82px] bg-gray-100 pl-3 pt-2"
                  onClick={() => {
                    navigate("/details");
                  }}
                >
                  <h3 className="text-[15px] font-bold">{item?.brand}</h3>
                  <p className="text-[13px] text-[#535665]">{item?.name}</p>
                  <div className="flex mt-1 gap-2 pb-2 ">
                    <p className=" font-bold text-[14px]">
                      {" "}
                      ₹ {item?.retailPrice}
                    </p>
                    <p className="text-[#7e818c] line-through text-[14px]">
                      ₹ {item?.purchasePrice}
                    </p>
                    <p className="text-[#ff905a] text-[13px]">
                      (
                      <span>
                        {Math.floor(
                          ((item?.purchasePrice - item?.retailPrice) /
                            item?.purchasePrice) *
                            100
                        )}
                      </span>
                      % OFF)
                    </p>
                  </div>
                </div>
              </div>
              </LazyLoad>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
