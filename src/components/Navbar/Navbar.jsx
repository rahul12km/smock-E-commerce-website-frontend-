/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import MenOption from "../DropOptions/MenOption";
import FemaleOption from "../DropOptions/FemaleOption";
import KidOption from "../DropOptions/KidOption";
import SportOption from "../DropOptions/SportOption";
import SalesOption from "../DropOptions/SalesOption";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogindropOption from "../DropOptions/LogindropOption";
import Cookies from 'js-cookie';
import { Toaster, toast } from "react-hot-toast";

function Navbar() {
  const accessToken=Cookies.get('access_token');
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const data = ["men", "women", "kids", "sports", "sales"];
  const [dropLogin, setDropLogin] = useState(false);
  const toastOption = {
    duration: 4000,
    position: "top-center",
  };


  const handleCartClick = () => {
   if(!accessToken){
    toast.success("Login Please",toastOption)
   }else{
    navigate("checkout/cart")
   }

  }

  const handleWishList= () => {
    if(!accessToken){
      toast.success("Login Please",toastOption)
     }else{
      navigate("/wishlist")
     }
  }

  return (
    <>
      {/*---------------------------------------------- navbar --------------------------------------------*/}

      <header className=" h-[70px] sticky top-0 z-20 bg-white shadow-md  hover:shadow-lg">
        <nav className="flex flex-row w-[100%]  h-[70px] ">
          <div className=" w-40 p-5 my-auto  cursor-pointer">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>

          <div className="">
          <Toaster/>
            <div className="flex flex-row gap-5 mx-auto  pt-[23px]  ml-[100px]">
              {data?.map((e, i) => (
                <div
                  key={i}
                  className={
                    option === e
                      ? "border-b-4 px-5 border-[#5a49e3] pb-[19.5px]"
                      : "pb-[22px] px-5"
                  }
                  onMouseEnter={() => setOption(e)}
                  onMouseLeave={() => setOption("")}
                >
                  <span
                    className="hover:text-gray-500 cursor-pointer"
                    onClick={() => {
                      navigate(`/${e}`);
                    }}
                  >
                    {e.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row  items-center ml-10 py-3 px-3">
            <div className=" flex hover:border-2 rounded-[5px]  hover:rounded-[5px]  border-none ">
              <div className=" flex icon px-3 h-[40px] items-center bg-[#f5f5f6]  rounded-tl-[5px] rounded-bl-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-[#aeafb0]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search for products,brands and more"
                className="w-[400px] h-[40px] l-5 bg-[#f5f5f6]  focus:outline-none rounded-tr-[5px] rounded-br-[5px] "
              />
            </div>
          </div>

          <div className=" flex flex-grow justify-end gap-2 pt-[3px]">
            <ul className=" flex flex-row gap-5 pt-3  pr-10">
              <li
                className="hover:text-gray-500 text-[12px] flex flex-col  items-center cursor-pointer pb-2 hover:border-b-[3px] hover:border-[#5a49e3]"
                onMouseEnter={() => setDropLogin(true)}
                onMouseLeave={() => setDropLogin(false)}
              >
                {" "}
                <PersonOutlineIcon />
                Profile
                <div
                  className={`${
                    dropLogin === true ? "absolute" : "hidden"
                  } bg-white z-[20] top-[70px] p-4 shadow-lg`}
                >
                  <LogindropOption />
                </div>
              </li>
              <li
                className="hover:text-gray-500 text-[12px] flex flex-col items-center cursor-pointer"
                onClick={handleWishList}
              >
                <FavoriteBorderOutlinedIcon />
                Wishlist
              </li>
              <li
                className="hover:text-gray-500 text-[12px] flex flex-col  items-center cursor-pointer"
                onClick={handleCartClick}
              >
                <ShoppingCartOutlinedIcon />
                Cart
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/*---------------------------------------------- Dropdown --------------------------------------------*/}

      {/*--------------Men --------*/}

      {option === "men" && (
        <div
          className="fixed top-[70px] w-full h-full z-20 "
          onMouseEnter={() => setOption("")}
        >
          <div className="w-full h-full absolute inset-0 bg-black opacity-50  z-[-1]">
            {/* kuch to hai */}
          </div>
          <div className="absolute left-[15.8%]">
            <MenOption setOption={setOption} />
          </div>
        </div>
      )}

      {/*--------------Women --------*/}

      {option === "women" && (
        <div
          className="fixed top-[70px] w-full h-full z-20 "
          onMouseEnter={() => setOption("")}
        >
          <div className="w-full h-full absolute inset-0 bg-black opacity-50  z-[-1]">
            {/* kuch to hai */}
          </div>
          <div className="absolute left-[22.05%]">
            <FemaleOption setOption={setOption} />
          </div>
        </div>
      )}

      {/*--------------Kids --------*/}

      {option === "kids" && (
        <div
          className="fixed top-[70px] w-full h-full z-20 "
          onMouseEnter={() => setOption("")}
        >
          <div className="w-full h-full absolute inset-0 bg-black opacity-50  z-[-1]">
            {/* kuch to hai */}
          </div>
          <div className="absolute left-[30.15%]">
            <KidOption setOption={setOption} />
          </div>
        </div>
      )}

      {/*--------------Sports--------*/}

      {option === "sports" && (
        <div
          className="fixed top-[70px] w-full h-full z-20 "
          onMouseEnter={() => setOption("")}
        >
          <div className="w-full h-full absolute inset-0 bg-black opacity-50  z-[-1]">
            {/* kuch to hai */}
          </div>

          <div className="absolute left-[36.6%]">
            <SportOption setOption={setOption} />
          </div>
        </div>
      )}

      {/*--------------Sales --------*/}

      {option === "sales" && (
        <div
          className="fixed top-[70px] w-full h-full z-20 "
          onMouseEnter={() => setOption("")}
        >
          <div className="w-full h-full absolute inset-0 bg-black opacity-50  z-[-1]">
            {/*kuch to hai*/}
          </div>
          <div className="absolute left-[44.85%]">
            <SalesOption setOption={setOption} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
