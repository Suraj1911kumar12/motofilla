import React, { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import Header from "../../layout/Header";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";

const BookingReport = () => {
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
            Booking Reports
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'}>Dashboard</Link>
                </li>
                <li>
                  <span>Booking Report</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Booking Reports
          </div>
          <div className="m-auto">
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control mx-5 mt-[3rem] ">
                <div className="label">
                  <span className="label-text font-semibold">Select User </span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    All
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </label>
              <label className="form-control mx-5 mt-[3rem] ">
                <div className="label">
                  <span className="label-text font-semibold">
                    Select Parking{" "}
                  </span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    All
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </label>
              <label className="form-control mx-5 mt-[1rem]">
                <div className="label">
                  <span className="label-text font-semibold">
                    Select Booking Status{" "}
                  </span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    All
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </label>
              <label className="form-control mx-5 mt-[1rem]">
                <div className="label">
                  <span className="label-text font-semibold">
                    Select Payment Method{" "}
                  </span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    All
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </label>
            </div>
            <label className="form-control mx-5 mt-[3rem] mb-[2rem]">
              <div className="label">
                <span className="label-text font-semibold">Select Date </span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mb-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  Select File Format
                </span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Select File Format
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </label>
          </div>
        </div>
        <div
          className="m-auto border w-fit px-2 py-1 rounded-md bg-[#35415B] flex justify-between text-white"
          role="button"
        >
          <LuDownload size={20} className="me-1" />{" "}
          <p className=" ">Download</p>
        </div>
      </div>
    </>
  );
};

export default BookingReport;
