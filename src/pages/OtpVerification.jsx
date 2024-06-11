import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useEffect, useState } from "react";
import logo from "../resorces/Logo.png";
import { UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const OtpVerification = () => {
  const auth = UseAuth()
  const [type, setType] = useState(localStorage.getItem('type') || "")
  const [value, setValue] = useState(localStorage.getItem('value') || "")
  const navigate = useNavigate()
  useEffect(() => {
    if (!type && !value) {
      navigate('/')
    }
  }, [])


  const [OTP, setOTP] = useState("");


  const handleOTPSubmit = () => {
    auth.otpVerification(OTP, value)
    setOTP("")
  }

  const resendOTPHandler = () => {
    auth.resendOTP(type, value)
    setOTP("")
  }

  const renderButton = (buttonProps) => {
    return (
      <button className="text-black my-2 hover:opacity-50 " {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend OTP"}
      </button>
    );
  };
  const renderTime = () => React.Fragment;


  const screenWidth = window.innerWidth;
  const contentStyle = {
    height: "3.5rem",
    width: "3.5rem",
    borderRadius: "5px",
    background: '#fff'
  };
  const smallScreen = {
    height: "2.5rem",
    width: "2.5rem",
    background: '#fff',
    borderRadius: "5px",
  };
  return (
    <>
      <div className="bg-[#35415B] h-screen w-full sm:p-[4.9rem] py-5">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="m-auto" />
        </div>
        <div className="input-form m-5 lg:m-auto bg-[#D9D9D9] p-5 sm:p-[3rem] rounded-lg lg:w-2/4 overflow-hidden">
          <div className="font-[poppins] font-[500] text-lg mb-[1.5rem] mt-5 text-[#35415B]">
            OTP Verification
          </div>
          <div className="grid grid-rows-4 grid-flow-col text-[#35415B73]">
            <div className="text-md">Enter 4 digit code send to you</div>
            <div className="text-sm">
              Your code will expire in 30:00 seconds
            </div>
            <div className="h-7">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                inputClassName={`text-black font-bold border-2 ${auth.isOTPError && "border-red-500"}`}
                OTPLength={4}
                otpType="number"
                disabled={false}
                inputStyles={screenWidth > 400 ? contentStyle : smallScreen}
              />
              {
                auth.isOTPError && <p className="error ">Invalid Otp</p>
              }
              <ResendOTP maxTime={30}
                onResendClick={resendOTPHandler}
                renderButton={renderButton}
                renderTime={renderTime}
              />
              <ToastContainer />
            </div>
          </div>
          <button onClick={handleOTPSubmit} className="grid w-full grid-rows-subgrid gap-4 mt-7 row-span-6">
            <div className="btn  w-full font-[poppins] bg-[#35415B]  font-[400] rounded-md text-[#f07e01] text-lg row-start-4 mb-5 hover:bg-[#35415bf5] border-0">
              Confirm
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
