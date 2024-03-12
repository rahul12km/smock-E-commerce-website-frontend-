/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

import CircularProgress from "@mui/joy/CircularProgress";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";

const PhoneSignUP = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputs = new Array(6).fill(null).map(() => useRef(null));
  const onCaptchVerify = async () => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,

      "recaptcha-container",
      {
        callback: () => {},
      }
    );
    recaptchaVerifier.render();

    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  };

  const onSignup = async () => {
    try {
      const response = await onCaptchVerify();
      setResult(response);
      setFlag(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (index, e) => {
    const value = e.target.value;
    console.log(e.keyCode);
    let newOtp = otp;
    newOtp = newOtp.slice(0, index) + value + newOtp.slice(index + 1);
    setOtp(newOtp);

    if ((e.which || e.keyCode) === 8 && index > 0 && !value) {
      inputs[index - 1].current.focus();
    } else if (!value && index > 0) {
      inputs[index - 1].current.focus();
    } else if (index < inputs.length - 1 && value) {
      inputs[index + 1].current.focus();
    }
  };

  const onOTPVerify = async () => {
    setLoading(true);
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  // ---------------------------------------------------html body phonesignup--------------------------------------------------

  return (
    <div className="main-container flex justify-center items-center h-screen bg-gradient-to-r to-purple-300 from-blue-300">
      <div className="phone-box flex flex-col p-10 m-auto bg-white rounded-lg drop-shadow-lg ">
        {flag === true ? (
          <div className="m-auto">
            <p className="text-[24px] font-[500] text-[#282c3f]">
              OTP sent to:{" "}
              <span className="font-semibold text-[24px] text-[#5547ca]">
                {number}
              </span>{" "}
            </p>
            <div className="otp-container flex gap-2 justify-center mt-5 ">
              {inputs.map((input, index) => (
                <input
                  key={index}
                  ref={input}
                  type="text"
                  className="otp-input h-[40px] w-[40px] border-[1px] border-[#D4D5D9] focus:outline-[#D4D5D9] text-center rounded-[4px]"
                  maxLength={1}
                  onChange={(e) => handleChange(index, e)}
                />
              ))}
            </div>
            <button
              className="flex  w-[fit-content]  mt-5 m-auto gap-3 px-3 py-1 bg-[#5a49e3] text-white rounded-md "
              onClick={onOTPVerify}
            >
              {loading && <CircularProgress size="sm" className="m-auto" />}

              <span className="text-[14px] p-1.5 font-semibold ">
                Verify OTP
              </span>
            </button>
          </div>
        ) : (
          <div className="m-auto flex flex-col">
            <div className="m-auto pb-2">
              <LockPersonIcon />
            </div>

            <p className="m-auto text-[20px] font-bold text-[#282c3f]">
              OTP Verification
            </p>

            <div className="mx-[20px] mt-5">
              <PhoneInput
                country={"in"}
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
              />
            </div>
            <div id="recaptcha-container" className="m-auto mt-5"></div>
            <button
              className="flex  w-[fit-content] text-[14px] mt-5 m-auto gap-3  bg-[#5a49e3] text-white rounded-md font-semibold p-2.5"
              onClick={onSignup}
            >
              SEND OTP
            </button>

            <p
              className="pt-[20px] text-[16px] text-[#9e94e4] flex justify-center font-semibold cursor-pointer"
              onClick={() => navigate("/login/email")}
            >
              LOGIN WITH EMAIL
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneSignUP;
