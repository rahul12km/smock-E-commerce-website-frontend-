/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { backendAPI } from "../../API";
import { ListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../../Actions/CartAction";
import { addWishlist } from "../../Actions/WishlistAction";
import Cookies from "js-cookie";
import { Toaster, toast } from "react-hot-toast";
const DetailPage = ({ setProgress }) => {
  const accessToken = Cookies.get("access_token");
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const toastOption = {
    duration: 4000,
    position: "top-center",
  };

  //==============================================================redux actions============================================================//
  const addtocartfnc = () => {
    if (!accessToken) {
      toast.success("Login Please");
    } else {
      if (size !== "") {
        const body = {
          productId: productId,
          count: 1,
          size: size,
        };
        dispatch(addCart(body));
        toast.success("Added to Cart", toastOption);
      } else {
        toast.success("Select Size", toastOption);
      }
    }
  };

  const addtoWishlistfnc = () => {
    const body = {
      productId: productId,
      userId: "65f57ed8b82e228293243a64",
    };
    dispatch(addWishlist(body));
  };

  const fetchproduct = async () => {
    try {
      const { data } = await axios.get(
        `${backendAPI}/api/products/${productId}`
      );
      setProgress(100);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);
  //===============================================================html body==========================================//
  return (
    <div className="container  ">
      <Toaster />
      <div className=" product-image  flex flex-row pl-5 gap-2 mt-[50px]">
        <div className="flex flex-row w-[900px] flex-wrap gap-3 ">
          {product?.image?.map((img, i) => (
            <>
              <img src={img} alt="" className="w-[418px] h-[560px]" key={i} />
            </>
          ))}
        </div>

        <div className="product-info ml-3">
          <h1 className="text-[24px] font-bold">{product?.brand}</h1>

          <h2 className="text-[20px] text-[#8B8BA3] pb-3">{product?.name}</h2>
          <div className=" flex flex-row border-2 border-[#282c3f ] h-[29px] w-[159.733px] pl-[2px]  mb-3">
            <p className="text-[#282c3f] text-center">4.5</p>
            <p className="ml-2 color-[#03a685] text-center ">⭐</p>
            <p className="text-[#8B8BA3] ">|</p>
            <p className="">53.5k Ratings</p>
          </div>
          <div className=" flex flex-row border-t-2 border-[#d4d5d9] gap-2 ">
            <p className="font-bold  text-[24px] mt-2">
              ₹ {product?.retailPrice}
            </p>
            <p className="text-[#414452] text-[24px] mt-2">MRP</p>
            <p className=" text-[#414452] line-through text-[24px] mt-2">
              ₹{product?.purchasePrice}
            </p>
            <span className="text-[#ff905a] font-semibold text-[24px] mt-2">
              (
              {Math.floor(
                ((product?.purchasePrice - product?.retailPrice) /
                  product?.purchasePrice) *
                  100
              )}{" "}
              % OFF)
            </span>
          </div>
          <p className="text-[14px] text-[#03a685] font-bold font-pop mt-2">
            inclusive of all taxes
          </p>

          <p className="font-bold text-[16px] mt-3 mb-2">SELECT SIZE</p>
          <div className="flex flex-row gap-3 cursor-pointer font-bold">
            {product?.size?.map((item, i) => (
              <p
                key={i}
                className={`w-[30px] h-[30px] bg-[#f5f5f6]  p-2 rounded-full  flex items-center justify-center ${
                  size === item
                    ? "text-black"
                    : "hover:text-black text-[#8B8BA3]"
                } `}
                onClick={() => setSize(item)}
              >
                {item}
              </p>
            ))}
          </div>

          <div className=" flex flex-row gap-5 mt-4 border-b-2 ">
            <button
              className=" h-[53px] w-[190px] bg-[#5a49e3] text-white p-2 rounded-md font-semibold mb-5"
              onClick={addtocartfnc}
            >
              Add to Cart
            </button>
            <button
              className="h-[53px] w-[190px] text-[#282c3f] border-2 border-[##d4d5d9] font-semibold bg-white p-2 rounded-md hover: border-2 hover:border-[#282c3f] mb-5"
              onClick={addtoWishlistfnc}
            >
              Wishlist
            </button>
          </div>

          <div className="flex flex-col mt-3 ">
            <p className="font-bold text-[16px] mb-3">DELIVERY OPTIONS</p>

            <div className="relative w-[250px]">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="h-[42.4px] w-[250px] rounded-md border-2 border-[#d4d5d9] p-2 outline-none"
              />

              <button
                type="button"
                className="top-0 right-0 px-4 py-2  h[42.4px] font-bold text-[#5a49e3] rounded-r-md  absolute"
              >
                Check
              </button>
            </div>
            <p className="mt-2 text-[#7f8383] text-[13px]">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <p className="text-[15px] mt-4 ">100% Original Products</p>
            <p className="text-[15px] mt-1">
              Pay on delivery might be available
            </p>
            <p className="text-[15px] mt-1">
              Easy 14 days returns and exchange
            </p>
            <p className="text-[15px] mt-1 mb-3">
              Try & Buy might be available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
