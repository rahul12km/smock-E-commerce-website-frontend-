/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import bag from "../../assets/Cart.png";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import CloseIcon from "@mui/icons-material/Close";
import SizeModal from "../../components/modal/SizeModal";
import QuantityModal from "../../components/modal/QuantityModal";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import RemoveModal from "../../components/modal/RemoveModal";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../Actions/CartAction";

const Cart = ({ setProgress }) => {
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  const [sizeModal, setSizeModal] = useState(false);
  const [qtyModal, setQtyModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [localCart, setLocalCart] = useState();

  const { data: cartData, loading } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  useEffect(() => {
    console.log(cartData);
    if (loading == false) {
      if (cartData.length === 0) {
        setEmpty(true);
        setProgress(100);
      } else {
        setEmpty(false);
        setProgress(100);
      }
    }
  }, [cartData]);

  return (
    <>
      {/* -----------------header -------------------------------------------------------------*/}
      <header className=" h-[70px] sticky top-0 z-20 bg-white shadow-md  hover:shadow-lg">
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
            <div className="text-[#20bd99]  tracking-[0.3em]  flex flex-col ">
              BAG
              <div className="border-t-2 border-2 border-[#20bd99] "></div>
            </div>

            <p className="text-[#696b79]">------------</p>
            <p className="tracking-[0.3em] text-[#696b79]">ADDRESS</p>
            <p className="text-[#696b79]">------------</p>
            <p className="tracking-[0.3em] text-[#696b79]">PAYMENT</p>
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
      {empty === false ? (
        <>
          {/*----------------------------------------------------------------- main div----------------------------------------- */}
          <div className=" container-box flex">
            <div className="flex flex-row m-auto">
              <div className="flex flex-col ">
                <div className=" pincode-adder flex pl-5 h-[68px] w-[594px] border-2 border-[#f5f5f6] justify-between mt-10 bg-[#f4f2ff] rounded-sm">
                  <p className="my-auto">Deliver to : 560047</p>
                  <p className="my-auto mr-3  cursor-pointer border-2 border-[#5a49e3] h-[34px] w-[128px] items-center flex justify-center text-[12px] text-[#5a49e3] rounded-md">
                    ENTER PINCODE
                  </p>
                </div>

                {cartData?.map((item) => (
                  <>
                    <div
                      key={item._id}
                      className="h-[173px] w-[594px] border-2 border-[#f5f5f6] mt-3 rounded-sm relative"
                    >
                      <div
                        className="absolute top-0 right-0 mr-2 mt-2 cursor-pointer"
                        onClick={() => setRemoveModal(true)}
                      >
                        {" "}
                        <CloseIcon className="text-[#a1a2a8]" />
                      </div>

                      <div className="flex flex-row">
                        <img
                          src={item.productId.image[0]}
                          className="h-[155px] p-2 w-[120px] "
                        />

                        <div className="flex flex-col ml-2 gap-1">
                          <p className="font-bold text-[14px] text-[#282c3f] mt-2">
                            {item.productId.brand}
                          </p>
                          <p className="text-[#282c3f] text-[14px]">
                            {item.productId.name}
                          </p>
                          <p className="text-[#94969f]  text-[12px]">
                            {item.productId.soldby}
                          </p>
                          <div className="flex flex-row gap-3">
                            <p
                              className="bg-[#f5f5f6] h-[20px] w-[73px] text-[14px] text-[#282c3f] font-semibold flex items-center justify-center cursor-pointer"
                              onClick={() => {
                                setSizeModal(true);
                              }}
                            >
                              Size:{item.size}
                              <ArrowDropDownRoundedIcon className="text-black" />
                            </p>

                            <p
                              className="bg-[#f5f5f6] h-[20px] w-[73px] text-[14px] text-[#282c3f] font-semibold flex items-center justify-center cursor-pointer"
                              onClick={() => setQtyModal(true)}
                            >
                              Qty:{item.count}
                              <ArrowDropDownRoundedIcon className="text-black" />
                            </p>
                          </div>
                          <div className="flex flex-row gap-2">
                            <p className="text-[#242425] font-bold text-[14px]">
                              ₹ {item.productId.retailPrice}
                            </p>
                            <p className="line-through text-[14px] text-[#94969f]">
                              ₹ {item.productId.purchasePrice}
                            </p>

                            <p className="text-[14px] text-[#5a49e3] font-semibold">
                              {Math.floor(
                                ((item.productId.purchasePrice -
                                  item.productId.retailPrice) /
                                  item.productId.purchasePrice) *
                                  100
                              )}
                              % OFF
                            </p>
                          </div>
                          <p className="text-[12px] ">
                            <span className="font-semibold"> 14 day</span>{" "}
                            return available
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`${sizeModal ? "flex" : "hidden"}`}>
                      <SizeModal
                        setSizeModal={setSizeModal}
                        item={item}
                        setLocalCart={setLocalCart}
                        localCart={localCart}
                      />
                    </div>
                    {qtyModal ? (
                      <QuantityModal
                        setQtyModal={setQtyModal}
                        item={item}
                        setLocalCart={setLocalCart}
                        localCart={localCart}
                      />
                    ) : (
                      <></>
                    )}
                    {removeModal ? (
                      <RemoveModal
                        setRemoveModal={setRemoveModal}
                        item={item}
                        setLocalCart={setLocalCart}
                        localCart={localCart}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>

              {/* ---------------------------------------------------------------Coupon Section -------------------------------*/}

              <div className="flex flex-col ml-3 border-l-[1px] border-[#d4d4d5] pl-4 ">
                <p className="text-[#535766] text-[12px] font-bold mt-10">
                  COUPONS
                </p>
                <div className="flex flex-row gap-3 mt-2 border-b-2 border-[#d4d4d5] pb-3 ">
                  <SellRoundedIcon />
                  <p className="text-[14px] text-[#282c3f] font-bold">
                    Apply Coupons
                  </p>
                  <p className="border-2 border-[#5a49e3] h-[27px] w-[66px] cursor-pointer text-[#5a49e3] text-[12px] font-semibold flex justify-center items-center rounded-md hover:bg-[#f4f2ff] ">
                    APPLY
                  </p>
                </div>
                <p className="text-[#535766] text-[12px] font-bold mt-3 ">
                  PRICE DETAILS (1 Items)
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-[152px]">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Total MRP
                    </p>
                    <p className=" text-[14px] text-[#282c3f] mt-3">₹ 1999</p>
                  </div>

                  <div className="flex flex-row gap-[100px]">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Discount on MRP
                    </p>
                    <p className=" text-[14px] text-[#03a685] mt-3">-₹ 1000</p>
                  </div>
                  <div className="flex flex-row gap-[55px]">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Coupon Discount
                    </p>
                    <p className=" text-[14px] text-[#5a49e3] mt-3">
                      Apply Coupon
                    </p>
                  </div>
                  <div className="flex flex-row gap-[143px]">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Platform Fee
                    </p>
                    <p className=" text-[14px] text-[#03a685] mt-3">FREE</p>
                  </div>
                  <div className="flex flex-row gap-[109px]">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Shipping Fee
                    </p>
                    <p className=" text-[14px] text-[#03a685] mt-3">
                      <span className="line line-through text-[#282c3f] pr-2">
                        ₹ 79
                      </span>
                      FREE
                    </p>
                  </div>
                  <div className="flex flex-row gap-[136px] border-t-2 border-[#d4d4d5]  ">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3 ">
                      Total Gaming
                    </p>
                    <p className=" text-[14px] text-[#282c3f] mt-3">₹ 999</p>
                  </div>
                  <button className="h-[40px] w-[270px] text-[14px] font-semibold text-white bg-[#5a49e3] flex items-center justify-center ">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* ----------------------------------------------------------------------empty div---------------------------------------- */}
          <div className="flex w-full h-[90vh] items-center justify-center">
            <div className=" m-auto">
              <div className="cont object-cover h-[300px] w-[300px] m-auto">
                <img
                  src={bag}
                  alt="OPPS"
                  style={{ mixBlendMode: "color-burn" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#424553] text-[20px] font-bold m-auto">
                  {" "}
                  Hey, it feels so light !
                </h3>
                <p className="m-auto text-[14px] text-[#7e818c] mt-2 mb-5 font-sans">
                  There is nothing in your bag. Let's add some item
                </p>
              </div>
              <div className="h-[41.6px] w-[211.5px] border-2 border-[#5a49e3] m-auto flex justify-center items-center ">
                <p
                  className="text-[#5a49e3] font-bold cursor-pointer text-[14px]"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  ADD ITEMS TO WISHLIST
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
