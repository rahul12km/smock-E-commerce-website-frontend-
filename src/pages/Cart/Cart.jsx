/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useMemo } from "react";
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
import PincodeModal from "../../components/modal/PincodeModal";
import CouponModal from "../../components/modal/CouponModal";

const Cart = ({ setProgress }) => {
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState(false);
  const [pin, setPin] = useState(false);
  const [avlCoupon, setAvlCoupon] = useState([]);

  const [openModal, setOpenModal] = useState({
    size: "",
    remove: "",
    qty: "",
  });

  const { data: cartData, loading } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const purchasePrice = useMemo(() => {
    return cartData?.reduce(
      (total, item) => total + item.productId.purchasePrice * item.count,
      0
    );
  }, [cartData]);

  const retailPrice = useMemo(() => {
    return cartData?.reduce(
      (total, item) => total + item.productId.retailPrice * item.count,
      0
    );
  }, [cartData]);

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
      {pin && <PincodeModal setPin={setPin} />}
      {coupon && (
        <CouponModal
          setCoupon={setCoupon}
          avlCoupon={avlCoupon}
          setAvlCoupon={setAvlCoupon}
        />
      )}
      {empty === false ? (
        <>
          {/*----------------------------------------------------------------- main div----------------------------------------- */}
          <div className=" container-box flex">
            <div className="flex flex-row m-auto">
              <div className="flex flex-col ">
                <div className=" pincode-adder flex pl-5 h-[68px] w-[594px] border-2 border-[#f5f5f6] justify-between mt-10 bg-[#f4f2ff] rounded-sm">
                  <p className="my-auto">Deliver to : 560047</p>
                  <p
                    className="my-auto mr-3  cursor-pointer border-2 border-[#5a49e3] h-[34px] w-[128px] items-center flex justify-center text-[12px] text-[#5a49e3] rounded-md"
                    onClick={() => setPin(true)}
                  >
                    ENTER PINCODE
                  </p>
                </div>

                {cartData?.map((item) => (
                  <div key={item._id}>
                    <div className="h-[173px] w-[594px] border-2 border-[#f5f5f6] mt-3 rounded-sm relative animate-fadeIn">
                      <div
                        className="absolute top-0 right-0 mr-2 mt-2 cursor-pointer"
                        onClick={() =>
                          setOpenModal({ remove: item._id, qty: "", size: "" })
                        }
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
                              onClick={() =>
                                setOpenModal({
                                  remove: "",
                                  qty: "",
                                  size: item._id,
                                })
                              }
                            >
                              Size:{item.size}
                              <ArrowDropDownRoundedIcon className="text-black" />
                            </p>

                            <p
                              className="bg-[#f5f5f6] h-[20px] w-[73px] text-[14px] text-[#282c3f] font-semibold flex items-center justify-center cursor-pointer"
                              onClick={() =>
                                setOpenModal({
                                  remove: "",
                                  qty: item._id,
                                  size: "",
                                })
                              }
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

                    {openModal.size === item._id ? (
                      <SizeModal item={item} setOpenModal={setOpenModal} />
                    ) : (
                      <></>
                    )}

                    {openModal.qty === item._id ? (
                      <QuantityModal setOpenModal={setOpenModal} item={item} />
                    ) : (
                      <></>
                    )}
                    {openModal.remove === item._id ? (
                      <RemoveModal setOpenModal={setOpenModal} item={item} />
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>

              {/* ---------------------------------------------------------------Coupon Section -------------------------------*/}

              <div className="flex flex-col ml-3 border-l-[1px] border-[#d4d4d5] pl-4 ">
                <p className="text-[#535766] text-[12px] font-bold mt-10">
                  COUPONS
                </p>
                {avlCoupon.length > 0 ? (
                  <>
                    <div className="flex flex-row gap-3 mt-2 border-b-2 border-[#d4d4d5] pb-3 ">
                      <SellRoundedIcon />
                      <p className="text-[14px] text-[#282c3f] font-bold">
                        {avlCoupon.length} Coupons Applied
                      </p>
                      <p
                        className="border-2 border-[#5a49e3] h-[27px] w-[66px] cursor-pointer text-[#5a49e3] text-[12px] font-semibold flex justify-center items-center rounded-md hover:bg-[#f4f2ff] "
                        onClick={() => setCoupon(true)}
                      >
                        EDIT
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-row gap-3 mt-2 border-b-2 border-[#d4d4d5] pb-3 ">
                      <SellRoundedIcon />
                      <p className="text-[14px] text-[#282c3f] font-bold">
                        Apply Coupons
                      </p>
                      <p
                        className="border-2 border-[#5a49e3] h-[27px] w-[66px] cursor-pointer text-[#5a49e3] text-[12px] font-semibold flex justify-center items-center rounded-md hover:bg-[#f4f2ff] "
                        onClick={() => setCoupon(true)}
                      >
                        APPLY
                      </p>
                    </div>
                  </>
                )}

                <p className="text-[#535766] text-[12px] font-bold mt-3 ">
                  PRICE DETAILS (1 Items)
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Total MRP
                    </p>
                    <p className=" text-[14px] text-[#282c3f] mt-3">
                      ₹ {purchasePrice}
                    </p>
                  </div>

                  <div className="flex flex-row justify-between">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Discount on MRP
                    </p>
                    <p className=" text-[14px] text-[#03a685] mt-3">
                      -₹ {purchasePrice - retailPrice}
                    </p>
                  </div>
                  <div className="flex flex-ro justify-between">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Coupon Discount
                    </p>
                    <p
                      className=" text-[14px] text-[#5a49e3] mt-3 cursor-pointer"
                      onClick={() => setCoupon(true)}
                    >
                      Apply Coupon
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3">
                      Platform Fee
                    </p>
                    <p className=" text-[14px] text-[#03a685] mt-3">FREE</p>
                  </div>
                  <div className="flex flex-row justify-between">
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
                  <div className="flex flex-row justify-between border-t-2 border-[#d4d4d5]  ">
                    <p className="text-[14px] text-[#282c3f] font-bold mt-3 ">
                      Total Price
                    </p>
                    <p className=" text-[14px] text-[#282c3f] mt-3">
                      ₹ {retailPrice}
                    </p>
                  </div>
                  <button className="h-[40px] w-[270px] text-[14px] font-semibold text-white bg-[#5a49e3] flex items-center justify-center  cursor-pointer"
                  onClick={()=>navigate("/checkout/address")}
                  >
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
                    navigate("/wishlist");
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
