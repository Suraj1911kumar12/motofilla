import React, { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import Header from "../../layout/Header";
import { LuDownload } from "react-icons/lu";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const AdminCommission = () => {
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
            Admin Commission
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'} >Dashboard</Link>
                </li>
                <li>
                  <span>Admin Commission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Admin Commission
          </div>
          <div className="m-auto mb-[3rem]">
            {/* <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">App Version </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={2.1}
                className="input input-bordered "
              />
            </label> */}
            <div className="text-2xl  mx-5 mt-[3rem] flex">
              <IoCheckmark size={30} className="text-success" />
              <span className="font-semibold"> Enable Admin Commission</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control mx-5 mt-[3rem]">
                <div className="label">
                  <span className="label-text font-semibold">
                    Commission Type{" "}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Percentage"
                  className="input input-bordered "
                />
              </label>{" "}
              <label className="form-control mx-5 mt-[3rem]">
                <div className="label">
                  <span className="label-text font-semibold">
                    Admin Commission{" "}
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  value={30}
                  className="input input-bordered "
                />
              </label>
            </div>
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

export default AdminCommission;
