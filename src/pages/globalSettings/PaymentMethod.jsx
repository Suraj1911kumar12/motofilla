import React, { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import razorpay from "../../resorces/razor.png";
import paytm from "../../resorces/paytm.jpg";
import wallet from "../../resorces/wallet.png";
import Header from "../../layout/Header";
// import { LuDownload } from "react-icons/lu";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const [expanded, setExpanded] = useContext(SidebarContext);
  return (
    <>
      <Header />
      <div
        className={`p-6 font-[poppins] h-screen overflow-scroll pb-[5rem]  ${expanded ? "" : " md:ms-[3rem] "
          } `}
      >
        <div className="flex justify-between items-center mb-5">
          <div className="text-xl font-medium text-[#35415B]">
            Payment Method
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'} >Dashboard</Link>
                </li>
                <li>
                  <span>Payment Method</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 my-5 relative">
          <div className="flex items-center">
            <div className="object-cover w-28">
              <img src={razorpay} alt="razorpay" />
            </div>
            <div className="btn bg-green-500 hover:bg-green-600 text-white w-3/12">
              Active
            </div>
          </div>
          <div className="flex items-center">
            <div className="object-cover w-28">
              <img src={wallet} alt="wallet" />
            </div>
            <div className="btn bg-green-500 hover:bg-green-600 text-white w-3/12">
              Active
            </div>
          </div>
          <div className="flex items-center">
            <div className="object-cover w-28">
              <img src={paytm} alt="paytm" />
            </div>
            <div className="btn bg-green-500 hover:bg-green-600 text-white w-3/12">
              Active
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            RazorPay
          </div>
          <div className="m-auto mb-[3rem]">
            <div className="text-2xl  mx-5 mt-[3rem] flex">
              <IoCheckmark size={30} className="text-success" />
              <span className="font-semibold"> Enable RazorPay</span>
            </div>
            <div className="text-2xl  mx-5 mt-5 flex">
              <IoCheckmark size={30} className="text-success" />
              <span className="font-semibold"> Enable Sandbox Mode</span>
            </div>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">RazzorPay Key </span>
              </div>
              <input
                type="text"
                placeholder="Percentage"
                value={"xxxxxxxxxxx"}
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  RazzorPay Secret{" "}
                </span>
              </div>
              <input
                type="text"
                placeholder="Percentage"
                value={"xxxxxxxxxxx"}
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mt-[3rem] ">
              <div className="label">
                <span className="label-text font-semibold">Image</span>
              </div>
              <div className="border rounded-lg bg-white">
                <input
                  type="file"
                  className="file-input file-input-ghost w-full max-w-xs"
                />
              </div>
              <div className="label">
                <span className="label-text ">Insert payment method image</span>
              </div>
            </label>
            <img src={razorpay} alt="razorpay" className=" p-5 w-28" />
          </div>
        </div>

        <div className=" flex justify-center">
          <span
            className="me-2 border w-fit px-2 py-1 rounded-md bg-[#35415B] text-white px-7"
            role="button"
          >
            Save
          </span>
          <span
            className="ms-2 border w-fit px-2 py-1 rounded-md bg-[#35415B] text-white px-7"
            role="button"
          >
            Back
          </span>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
