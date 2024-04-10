import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { backendAPI } from "../../API";
import { useNavigate } from "react-router-dom";
import AddressModal from "./AddressModal";

const PincodeModal = ({ setPin }) => {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [addAddress, setAddAddress] = useState({address:false});
  const [pinDetail, setPinDetail] = useState({
    name: "",
    phoneNumber: "",
    addressLine: "",
    locality: "",
    pincode: "",
    state: "",
    city: "",
  });
  const pinValid = /^\d{6}$/;

  const handlePincode = (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);
    if (newPincode.length === 6 && pinValid.test(newPincode) === true) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      {addAddress.address === true ? (
        //========================================Address=========================================//
        <>
          <AddressModal context={addAddress} setContext={setAddAddress} data={null} />
        </>
      ) : (
        //============================== pincode===============================//
        <div className="fixed flex h-screen w-full bg-[rgba(0,0,0,.5)] z-20"
         onClick={() => setPin(false)}
         >
          <div className="relative bg-white w-[439.4px] z-30 m-auto pt-2 flex flex-col rounded-[3px] animate-fadeIn"
              onClick={(e) => {
          // Prevent event propagation to parent div
          e.stopPropagation();
        }}>
            <div className="header flex justify-between p-2 border-b-2 border-gray">
              <span className="ml-2 text-[#282c3f] font-semibold">
                Enter Delivery Details
              </span>
              <CloseIcon
                onClick={() => setPin(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="scroll flex flex-col">
              <div className="relative flex w-full justify-center items-center bg-white">
                <input
                  type="text"
                  className="h-[44px] w-[391.4px] mt-4 mb-4 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2"
                  placeholder="Enter pincode"
                  onChange={handlePincode}
                  value={pincode}
                  maxLength={6}
                />
                <span
                  className={`absolute right-[10%] pt-1 font-bold ${
                    isValid ? "text-[#5a49e3] cursor-pointer" : "text-[#867dcb]"
                  }`}
                >
                  CHECK
                </span>
              </div>
            </div>

            <div className="flex bg-[#f5f5f6] w-full h-[60px] items-center">
              <p className="mx-auto font-bold text-[#696b79]">OR</p>
            </div>
            <div className="footer p-2 flex h-[60px]">
              <div className="flex w-full items-center">
                <div
                  className="w-full h-[40px] flex justify-center items-center border-[1px] rounded-[3px] border-[#282c3f] text-[#282c3f] font-bold cursor-pointer"
                  onClick={() => setAddAddress({address:true})}
                >
                  ADD NEW ADDRESS
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PincodeModal;
