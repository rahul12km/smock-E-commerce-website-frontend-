import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CustomHeader = () => {
  const navigate = useNavigate();

  console.log(location.pathname)

  return (
    <div className="flex flex-col">
      <header className=" h-[70px] w-full sticky top-0 z-10 bg-white shadow-md  hover:shadow-lg">
        <nav className="flex flex-row w-[100%]  h-[70px] justify-between">
          <div
            className=" w-40 p-5 cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="gap-2 flex flex-row my-auto  text-[15px] font-assist font-semibold  ">
            <NavLink
              to="/checkout/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-[#20bd99] border-b-2  border-[#20bd99]  tracking-[0.3em]"
                  : "tracking-[0.3em] text-[#696b79]"
              }
            >
              BAG
            </NavLink>
            <p className="text-[#696b79]">------------</p>
            <NavLink
              to="/checkout/address"
              className={({ isActive }) =>
                isActive
                  ? "text-[#20bd99] border-b-2  border-[#20bd99]  tracking-[0.3em]"
                  : "tracking-[0.3em] text-[#696b79]"
              }
            >
              ADDRESS
            </NavLink>
            <p className="text-[#696b79]">------------</p>
            <NavLink
              to="/checkout/payment"
              className={({ isActive }) =>
                isActive
                  ? "text-[#20bd99] border-b-2  border-[#20bd99]  tracking-[0.3em]"
                  : "tracking-[0.3em] text-[#696b79]"
              }
            >
              PAYMENT
            </NavLink>
          </div>

          <div className="flex justify-end my-auto gap-3 mr-7">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              alt=""
              className="h-[26px] w-[28px] "
            />
            <p className="text-[15px] text-[#535766] tracking-[1px] font-assist font-semibold pb-[2px]">
              100% SECURE
            </p>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default CustomHeader;
