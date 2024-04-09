import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { backendAPI } from "../../API";
import { useNavigate } from "react-router-dom";
const AddressModal = () => {
  const [pincode, setPincode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
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

  const fetchpin = async () => {
    try {
      const { data } = await axios.get(
        `https://api.postalpincode.in/pincode/${pinDetail.pincode}`
      );

      console.log(data[0].PostOffice);

      if (data && data[0].PostOffice && data[0].PostOffice.length > 0) {
        setPinDetail((prev) => ({
          ...prev,
          state: data[0].PostOffice[0].State,
          city: data[0].PostOffice[0].District,
        }));
      } else {
        // Handle case where data or PostOffice array is empty
        console.log("No pincode data found or invalid response structure");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleblur = () => {
    if (
      pinDetail.pincode.length === 6 &&
      pinValid.test(pinDetail.pincode) === true
    ) {
      fetchpin();
    }
  };

  const handlePincode = (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);
    if (newPincode.length === 6 && pinValid.test(newPincode) === true) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlePincodeChange = (field, e) => {
    const newValue = e.target.value;
    setPinDetail((prev) => ({ ...prev, [field]: newValue }));
  };

  const handleAddAddress = async () => {
    try {
      const response = await axios.post(
        `${backendAPI}/api/address/add-address`,
        pinDetail,
        {
          params: {
            subId: "661236440774da34ed2307cc",
          },
        }
      );
      if (!response.data.message) {
        alert("Added Succesfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  return (
    <div>
      {" "}
      <div className="fixed flex h-screen w-full bg-[rgba(0,0,0,.5)] z-30">
        <div className="relative bg-white w-[439.4px] z-30 m-auto pt-2 flex flex-col rounded-[3px]">
          <div className="header flex justify-between p-2 border-b-2 border-[#d5d5d9]">
            <ArrowBackIos
              className="cursor-pointer"
              onClick={() => {
                setAddAddress(false);
              }}
            />
            <span className="ml-2  text-[14px] text-[#282c3f] font-[700]">
              ADD NEW ADDRESS
            </span>
            <CloseIcon
              onClick={() => {
                console.log("");
              }}
              className="cursor-pointer"
            />
          </div>
          <div className=" scroll ">
            <p className="text-[#282c3f] text-[12px] ml-[24px] mt-3 font-bold">
              CONTACT DETAILS
            </p>
            <div className="flex flex-col justify-center items-center">
              <input
                onChange={(e) => {
                  handlePincodeChange("name", e);
                }}
                value={pinDetail.name}
                type="text"
                className="h-[44px] w-[391.4px] mt-3 mb-1 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                placeholder="Enter Name"
              />
              <input
                onChange={(e) => {
                  handlePincodeChange("phoneNumber", e);
                }}
                value={pinDetail.phoneNumber}
                type="number"
                className="h-[44px] w-[391.4px] mt-4 mb-2 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                placeholder="Enter Phone Number"
                style={{
                  WebkitAppearance: "none", // Hide default appearance
                  MozAppearance: "textfield", // Hide default appearance in Firefox
                }}
              />
            </div>
            <p className="text-[#282c3f] text-[12px] ml-[24px] mt-3 font-bold">
              ADDRESS
            </p>
            <div className="flex flex-col justify-center items-center ">
              <input
                type="text"
                className="h-[44px] w-[391.4px] mt-3 mb-1 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                placeholder="Enter Pincode"
                value={pinDetail.pincode}
                onChange={(e) =>
                  setPinDetail((prev) => ({
                    ...prev,
                    pincode: e.target.value,
                  }))
                }
                onBlur={handleblur}
              />
              <input
                onChange={(e) => {
                  handlePincodeChange("addressLine", e);
                }}
                value={pinDetail.addressLine}
                type="text"
                className="h-[44px] w-[391.4px] mt-3 mb-1 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                placeholder="Address (House No., Building, Street, Area)"
              />
              <input
                onChange={(e) => {
                  handlePincodeChange("locality", e);
                }}
                value={pinDetail.locality}
                type="text"
                className="h-[44px] w-[391.4px] mt-3 mb-1 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                placeholder="Locality/Town"
              />
              <div className="flex  w-[391.4px] justify-between">
                <input
                  value={pinDetail.city}
                  type="text"
                  className="h-[44px] w-[48%] mt-3 mb-4 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                  placeholder="City/District"
                  readOnly
                />
                <input
                  type="text"
                  className="h-[44px] w-[48%] mt-3 mb-4 border-2 border-[#d5d6d9] rounded-md focus:outline-none px-2 text-[12px]"
                  placeholder="State"
                  value={pinDetail.state}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div
            className="footer p-2 flex h-[60px]"
            style={{
              boxShadow: "0px -1px 4px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex w-full items-center justify-center">
              <div
                className="w-full h-[40px] flex justify-center items-center bg-[#5a49e3] text-white font-bold rounded-[4px] cursor-pointer"
                onClick={handleAddAddress}
              >
                ADD ADDRESS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
