import React, { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import Header from "../../layout/Header";
import { LuDownload } from "react-icons/lu";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const LandingPageTemplate = () => {
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
            Landing Page Template
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'} >Dashboard</Link>
                </li>
                <li>
                  <span>Landing Template</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          <div
            className="bg-[#F07E01] w-fit px-5 py-1 text-white rounded-md float-end"
            role="button"
          >
            View Landing Page
          </div>
        </div>
        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem] h-[50vh]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Landing Page Template
          </div>
          <div className="m-auto mb-[3rem]"></div>
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

export default LandingPageTemplate;
