import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../utils/SidebarContext";
import logo from "../resorces/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { ImUserCheck } from "react-icons/im";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { TbParkingCircle } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { LiaTreeSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { PiUserGearFill } from "react-icons/pi";
import { TfiSettings } from "react-icons/tfi";

export default function Sidebar() {
  const navigate = useNavigate();
  const width = window.innerWidth;
  useEffect(() => {
    setExpanded(true);
  }, [width]);

  const pathName = window.location.pathname;
  const [expanded, setExpanded] = useContext(SidebarContext);

  const styleSheet = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "0.75rem ",
    borderBottomRightRadius: "0.75rem ",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingInlineStart: "1.5rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    fontWeight: "500",
    cursor: "pointer",
    transitionProperty:
      "color backgroundColor borderColor textDecorationColor fill stroke",
    transitionTimingFunction: "cubicBezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    fontFamily: "poppins",
  };

  return (
    <aside
      className={`h-screen transition-all ${expanded ? "lg:w-[17vw]" : "lg:w-[4vw]"
        }`}
    >
      <nav className="h-full flex flex-col bg-white shadow-sm mb-5">
        <div
          className={`p-4 pb-2 flex justify-center items-center bg-[#35415B] ${expanded ? "pt-2" : ""
            }`}
        >
          <img
            src={logo}
            className={`overflow-hidden transition-all  object-contain ${expanded ? "w-20" : "w-0"
              }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`ms-3 text-white ${expanded ? "hidden" : "block"}`}
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>

        <ul
          className={`flex-1  bg-[#35415B] pt-3 h-screen  sb-hide ${expanded ? "overflow-scroll" : ""
            }`}
        >
          <li
            style={styleSheet}
            onClick={() => navigate("/")}
            className={`
         group z-[1] ${expanded ? " me-[1rem] xl:me-[4rem]" : "me-3"}
        ${pathName === "/"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <MdDashboard size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Dashboard
            </span>

            {!expanded && (
              <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Dashboard
              </div>
            )}
          </li>
          <div
            className={`bg-gray-500 px-3 py-2 font-medium text-white my-7 text-center text-xl text-[poppins] ${expanded ? "block" : "hidden"
              }`}
          >
            Account Management
          </div>

          <li
            onClick={() => navigate("/user")}
            style={styleSheet}
            className={`
         group z-[1] ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName.includes("/user")
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <HiUsers size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Users
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Users
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/vendor")}
            style={styleSheet}
            className={`
         group z-[1]  ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName === "/vendor"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <ImUserCheck size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Vendors
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Vendors
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/report/userreport")}
            style={styleSheet}
            className={`
         group z-[1] relative ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName.includes("/report")
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <MdAnalytics size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Report
            </span>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/report") ? "hidden" : "block"
                  }`}
              >
                <RiArrowDropRightLine size={30} />
              </div>
            </div>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/report") ? "block" : "hidden"
                  }`}
              >
                <RiArrowDropDownLine size={30} />
              </div>
            </div>
            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
              >
                Report
              </div>
            )}
          </li>
          <ul
            className={`text-white ms-[4rem] list-disc font-[poppins] ${expanded ? "" : "hidden"
              } ${pathName.includes("/report") ? "block" : "hidden"}`}
          >
            <li
              onClick={() => navigate("/report/userreport")}
              className={
                pathName.includes("/userreport") ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              User Report
            </li>
            <li
              onClick={() => navigate("/report/bookingreport")}
              className={
                pathName.includes("/bookingreport") ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Booking Report
            </li>
            <li
              onClick={() => navigate("/report/parkingreport")}
              className={
                pathName.includes("/parkingreport") ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Parking Report
            </li>
            <li
              onClick={() => navigate("/report/transactionreport")}
              className={
                pathName.includes("/transactionreport") ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Transaction Report
            </li>
          </ul>
          <div
            className={`bg-gray-500 px-3 py-2 font-medium text-white my-7 text-center text-xl text-[poppins] ${expanded ? "block" : "hidden"
              }`}
          >
            Parking Management
          </div>
          <li
            onClick={() => navigate("/parkingList")}
            style={styleSheet}
            className={`
          group z-[1]  ${expanded ? " lg:me-[4rem]" : "me-3"}
         ${pathName === "/parkingList"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
     `}
          >
            <TbParkingCircle size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Parking List
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Parking List
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/parkingBookings")}
            style={styleSheet}
            className={`
          group z-[1]  ${expanded ? " lg:me-[4rem]" : "me-3"}
         ${pathName === "/parkingBookings"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
     `}
          >
            <BiSolidUserDetail size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Parking Bookings
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Parking Bookings
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/parkingFacilities")}
            style={styleSheet}
            className={`
           group z-[1]  ${expanded ? " lg:me-[4rem]" : "me-3"}
          ${pathName === "/parkingFacilities"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
      `}
          >
            <LiaTreeSolid size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Parking Facilities
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Parking Facilities
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/vehicleSettings/brand")}
            style={styleSheet}
            className={`
         group z-[1] relative ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName.includes("/vehicleSettings/")
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <IoMdSettings size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Vehicle Settings
            </span>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/vehicleSettings/") ? "hidden" : "block"
                  }`}
              >
                <RiArrowDropRightLine size={30} />
              </div>
            </div>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/vehicleSettings/") ? "block" : "hidden"
                  }`}
              >
                <RiArrowDropDownLine size={30} />
              </div>
            </div>
            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
              >
                Vehicle Settings
              </div>
            )}
          </li>
          <ul
            className={`text-white ms-[4rem] list-disc font-[poppins] ${expanded ? "" : "hidden"
              } ${pathName.includes("/vehicleSettings") ? "block" : "hidden"}`}
          >
            <li
              onClick={() => navigate("/vehicleSettings/brand")}
              className={
                pathName === "/vehicleSettings/brand" ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Brands
            </li>
            <li
              onClick={() => navigate("/vehicleSettings/modal")}
              className={
                pathName === "/vehicleSettings/modal" ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Modals
            </li>
          </ul>
          <div
            className={`bg-gray-500 px-3 py-2 font-medium text-white my-7 text-center text-xl text-[poppins] ${expanded ? "block" : "hidden"
              }`}
          >
            Setting Management
          </div>
          <li
            onClick={() => navigate("/payment/bookingReport")}
            style={styleSheet}
            className={`
         group z-[1] relative ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName.includes("/payment/")
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <BsBank size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Payments
            </span>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/payment/") ? "hidden" : "block"
                  }`}
              >
                <RiArrowDropRightLine size={30} />
              </div>
            </div>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/payment/") ? "block" : "hidden"
                  }`}
              >
                <RiArrowDropDownLine size={30} />
              </div>
            </div>
            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
              >
                Payments
              </div>
            )}
          </li>
          <ul
            className={`text-white ms-[4rem] list-disc font-[poppins] ${expanded ? "" : "hidden"
              } ${pathName.includes("/payment/") ? "block" : "hidden"}`}
          >
            <li
              onClick={() => navigate("/payment/bookingReport")}
              className={
                pathName === "/payment/bookingReport" ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Booking Reports
            </li>
            <li
              onClick={() => navigate("/payment/parkingReport")}
              className={
                pathName === "/payment/parkingReport" ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Parking Reports
            </li>
          </ul>
          <li
            onClick={() => navigate("/authorities")}
            style={styleSheet}
            className={`
           group z-[1]  ${expanded ? " lg:me-[4rem]" : "me-3"}
          ${pathName === "/authorities"
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
      `}
          >
            <PiUserGearFill size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Authorities
            </span>

            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Authorities
              </div>
            )}
          </li>
          <li
            onClick={() => navigate("/globalsetting/settings")}
            style={styleSheet}
            className={`
         group z-[1] relative ${expanded ? " lg:me-[4rem]" : "me-3"}
        ${pathName.includes("/globalsetting/")
                ? "bg-[#1E1E1E] text-[#F07E01]"
                : "hover:bg-indigo-50 text-white hover:text-gray-600"
              }
    `}
          >
            <TfiSettings size={30} />
            <span
              className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
              Settings
            </span>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/globalsetting/") ? "hidden" : "block"
                  }`}
              >
                <RiArrowDropRightLine size={30} />
              </div>
            </div>
            <div
              className={`absolute top-3 right-0 lg:right-[-3rem] ${expanded ? "block" : "hidden"
                }`}
            >
              <div
                className={`${pathName.includes("/globalsetting/") ? "block" : "hidden"
                  }`}
              >
                <RiArrowDropDownLine size={30} />
              </div>
            </div>
            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 bg-white
      `}
              >
                Settings
              </div>
            )}
          </li>
          <ul
            className={`text-white ms-[4rem] list-disc font-[poppins] ${expanded ? "" : "hidden"
              } ${pathName.includes("/globalsetting") ? "block" : "hidden"}`}
          >
            <li
              onClick={() => navigate("/globalsetting/settings")}
              className={
                pathName === "/globalsetting/settings" ? "text-[#F07E01]" : ""
              }
              role="button"
            >
              Global Settings
            </li>
            <li
              onClick={() => navigate("/globalsetting/adminCommission")}
              className={
                pathName === "/globalsetting/adminCommission"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Admin Commission
            </li>
            <li
              onClick={() => navigate("/globalsetting/paymentMethod")}
              className={
                pathName === "/globalsetting/paymentMethod"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Payment Method
            </li>
            <li
              onClick={() => navigate("/globalsetting/landingPageTemplate")}
              className={
                pathName === "/globalsetting/landingPageTemplate"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Landing Page Templete
            </li>
            <li
              onClick={() => navigate("/globalsetting/headerTemplate")}
              className={
                pathName === "/globalsetting/headerTemplate"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Header Template
            </li>
            <li
              onClick={() => navigate("/globalsetting/footerTemplate")}
              className={
                pathName === "/globalsetting/footerTemplate"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Footer Templete
            </li>
            <li
              onClick={() => navigate("/globalsetting/privacyPolicy")}
              className={
                pathName === "/globalsetting/privacyPolicy"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Privacy Policy
            </li>
            <li
              onClick={() => navigate("/globalsetting/termsAndConditions")}
              className={
                pathName === "/globalsetting/termsAndConditions"
                  ? "text-[#F07E01]"
                  : ""
              }
              role="button"
            >
              Terms And Conditions
            </li>
          </ul>
          <ul className="menu text-white  rounded-box">
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </ul>
        <div className=" flex p-3 bg-[#35415B]">
          {/* <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div> */}
        </div>
      </nav>
    </aside>
  );
}
