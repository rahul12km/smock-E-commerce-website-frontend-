import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { updateCart } from "../../Actions/CartAction";

const SizeModal = ({ setSizeModal, item }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState();

  //-----------------------------------LOCAL UPDATE AND  BACKEND UPDATE---------------------------------------//

  const handleSizeUpdate = () => {
    dispatch(updateCart({ id: item._id, qty: item.count, size }));
    setSizeModal(false);
  };

  // ----------------------------------------------------------HTML BODY-------------------------------------------//
  return (
    <>
      <div
        className="h-[100vh] w-full fixed left-0 right-0 top-0 z-[23] bg-[rgba(0,0,0,.5)] flex"
        onClick={() => {
          setSizeModal(false);
        }}
      ></div>
      <div className="modal-cont h-[360px] w-[417px] z-[30] absolute  top-[25%] left-[35%]  bg-white flex  flex-col">
        <div className="flex  mx-auto h-[125.35px] w-[367.4px] mt-[24.8px] relative border-b-[1px] border-[#EAEAEC]">
          <div
            className="absolute right-0 top-0 cursor-pointer "
            onClick={() => setSizeModal(false)}
          >
            <CloseIcon className="text-[#434343]" />
          </div>
          <div className="img-cont h-[125.35px] w-[60px]">
            <img src={item.productId.image[0]} className="h-[80px] w-[60px]" />
          </div>

          <div className=" text-cont flex flex-col h-[108px] w-[291.4px]">
            <div className="info-cont ml-[10px]">
              <h1 className="font-bold text-[16px]">{item.productId.brand}</h1>

              <p className="text-[16px]">{item.productId.name}</p>
              <div className="price-cont flex  text-[14px] gap-1">
                <p className="font-bold text-[#282c3f] ">
                  ₹{item.productId.retailPrice}
                </p>
                <p className="line-through text-[#94969f]">
                  ₹{item.productId.purchasePrice}
                </p>
                <p className="text-[#5a49e3] font-bold">
                  {Math.floor(
                    ((item.productId.purchasePrice -
                      item.productId.retailPrice) /
                      item.productId.purchasePrice) *
                      100
                  )}
                  % OFF
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="size-box flex flex-col h-[125.35px] w-[367.4px] mx-auto  ">
          <h1 className="text-[16px] font-[700] my-2">Select size</h1>
          <div className="size-row flex gap-4 my-2 ">
            {item.productId.size.map((s, i) => (
              <>
                <div
                  className={`h-[44.45px] w-[43.6px] font-semibold flex items-center justify-center rounded-full border-[2px]  cursor-pointer ${
                    size === s
                      ? " text-[#5a49e3] border-[#5a49e3]"
                      : " border-[#535766] hover:text-[#5a49e3]  hover:border-[#5a49e3]"
                  } `}
                  key={i}
                  onClick={() => {
                    setSize(s);
                  }}
                >
                  <span>{s}</span>
                </div>
              </>
            ))}
          </div>
          <p className="my-2 text-[14px]">
            Seller:
            <span className="text-[16px] font-[700] pl-[2px]">
              {" "}
              {item.productId.soldby}
            </span>
          </p>
        </div>
        <div
          className="flex items-center justify-center h-[40px] w-[367.4px] bg-[#5a49e3] mx-auto my-4"
          onClick={handleSizeUpdate}
        >
          <p className="text-white font-semibold">DONE</p>
        </div>
      </div>
    </>
  );
};

export default SizeModal;
