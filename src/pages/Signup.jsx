import React from "react";
import logo from "../resorces/Logo.png";

const Signup = () => {
  return (
    <>
      <div className="bg-[#35415B]  sm:p-[4.9rem] py-5"> 
        <div className="logo-container">
          <img src={logo} alt="Logo" className="m-auto" />
        </div>
        <div className="input-form m-5 lg:m-auto bg-[#D9D9D9] p-5 sm:p-[3rem] rounded-lg lg:w-2/4">
          <div className="font-[poppins] font-[500] text-[#35415B] text-lg mb-5">
            Sign Up
          </div>
          <div className="grid grid-cols-1">
            <input
              type="text"
              placeholder="Enter email"
              className="input input-bordered  w-full rounded-md bg-[#d9d9d9] focus:outline-none mb-3 placeholder:text-[14px] "
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input input-bordered  w-full rounded-md bg-[#d9d9d9] focus:outline-none mb-3 placeholder:text-[14px]"
            />
            <input
              type="text"
              placeholder="Enter Recovery Phone Number"
              className="input input-bordered  w-full rounded-md bg-[#d9d9d9] focus:outline-none mb-3 placeholder:text-[14px]"
            />

            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered  w-full rounded-md bg-[#d9d9d9] focus:outline-none mb-3 placeholder:text-[14px]"
            />
          </div>
          <div class="grid grid-rows-subgrid gap-4 row-span-3">
            <div className="btn w-full font-[poppins] bg-[#35415B] font-[400] rounded-md text-[#f07e01] text-[15px] row-start-4  hover:bg-[#35415bf5] border-0">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
