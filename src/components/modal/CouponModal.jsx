import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const CouponModal = ({ setCoupon, avlCoupon, setAvlCoupon }) => {
  const [tempList, setTempList] = useState(avlCoupon);

  const handleApply = () => {
    setAvlCoupon(tempList);
    setCoupon(false);
  };
  const handleInsert = (i) => {
    if (tempList.some((item) => item.id === i.id)) {
      setTempList((prevList) => prevList.filter((item) => item.id !== i.id));
    } else {
      setTempList((prevList) => [...prevList, i]);
    }
  };

  return (
    <div className="fixed  flex h-[100vh] w-[100%]  bg-[rgba(0,0,0,.5)] z-20"
     onClick={() => setCoupon(false)}>
      <div className="relative bg-white h-[447.33] w-[498.4px] z-30 m-auto pt-2 flex flex-col animate-fadeIn"
          onClick={(e) => {
          // Prevent event propagation to parent div
          e.stopPropagation();
        }}>
        <div className="header flex justify-between p-2 border-b-2 border-grey">
          <span className="ml-2 text-[#282c3f] font-semibold">
            APPLY COUPON
          </span>
          <CloseIcon
            onClick={() => setCoupon(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="scroll flex flex-col">
          <div className=" relative flex w-full justify-center items-center bg-white">
            <input
              type="text"
              className="h-[44px] w-[433.6px] mt-4 mb-4 border-2 border-[#d5d6d9 ] rounded-md focus:outline-none px-2"
              placeholder="Enter your coupon code"
            />
            <span className="absolute right-[10%] pt-1 font-bold text-[#867dcb]">
              {" "}
              CHECK
            </span>
          </div>
          <div className="h-[8px] w-full bg-[#f5f5f6] "></div>
          <div className="coupon-item flex flex-col bg-white">
            <div className="h-[146.6px]">
              <div className="flex items-center space-x-2 mt-4 ml-3 gap-4">
                <input
                  checked={tempList.some((item) => item.id === 123)}
                  onChange={() =>
                    handleInsert({
                      id: 123,
                      code: "MUSTGRAB",
                      discount: 300,
                    })
                  }
                  type="checkbox"
                  // onChange={(e) => handleColorChange(e.target.value)}
                  className="form-checkbox h-5 w-5 text-[#5a49e3] rounded border-gray-300 focus:border-[#988cf4] ml-3"
                />
                <label className="text-sm border-[1px] border-dashed p-2 text-[#5a49e3] rounded-[3px] border-[#5a49e3] font-bold">
                  MUSTGRAB
                </label>
              </div>
              <div className="info-coupon flex flex-col text-[#282c3f] text-[14px] ml-[70px] mt-2">
                <p className="font-bold">Save ₹</p>
                <p> Rs. 300 off on minimum purchase of Rs. 1299 .</p>
                <p>
                  <span>Expires on: </span>
                  <span>30th September 2024</span>
                  <span className="text-[#d5d5d9] ">|</span>
                  <span>11:59 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f6] w-full h-[60px] "></div>
        <div className="footer p-2 flex h-[60px] ">
          <div className="flex w-full items-center">
            <div className="w-[40%] h-[40px]">
              <div className="ml-8">
                <p className="text-[#696b79] text-[12px]">Maximum savings:</p>

                <p className="font-bold text-[16px]">₹ 454</p>
              </div>
            </div>
            <div
              className="w-[60%] h-[40px] flex justify-center items-center bg-[#5a49e3] text-white font-bold"
              onClick={handleApply}
            >
              APPLY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
