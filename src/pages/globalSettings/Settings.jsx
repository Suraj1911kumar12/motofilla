import React, { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import Header from "../../layout/Header";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";

const Settings = () => {
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
            Global Settings
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'} >Dashboard</Link>
                </li>
                <li>
                  <span>Global Settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            General Settings
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">App Version </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={2.1}
                className="input input-bordered "
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control mx-5 mt-[3rem] ">
                <div className="label">
                  <span className="label-text font-semibold">
                    Application Logo{" "}
                  </span>
                </div>
                <div className="border rounded-lg bg-white">
                  <input
                    type="file"
                    className="file-input file-input-ghost w-full max-w-xs"
                  />
                </div>
              </label>
              <label className="form-control mx-5 mt-[3rem] ">
                <div className="label">
                  <span className="label-text font-semibold">
                    Application Favicon{" "}
                  </span>
                </div>
                <div className="border rounded-lg bg-white">
                  <input
                    type="file"
                    className="file-input file-input-ghost w-full max-w-xs"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Google Map API Key (App Usage)
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  {" "}
                  Google Map API Key
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={"xxxxxxxxxxx"}
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">Server Key </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={"xxxxxxxxxxx"}
                className="input input-bordered "
              />
            </label>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Wallet Settings
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  {" "}
                  Minimum Wallet Amount To Deposit
                </span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                value={1}
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  {" "}
                  Maximum Wallet Amount To Deposit
                </span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                value={100}
                className="input input-bordered "
              />
            </label>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Referral Settings
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  {" "}
                  Referral Amount
                </span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                value={1}
                className="input input-bordered "
              />
              <div className="label">
                <span className="label-text-alt">
                  Note: Customer will get refer earnings after the first ride is
                  successfully completed.
                </span>
              </div>
            </label>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Parking Distance
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold"> Distance</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={"Miles"}
                className="input input-bordered "
              />
            </label>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold"> Radius</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                value={50000}
                className="input input-bordered "
              />
            </label>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Map Tracking Options
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">
                  See your map tracking options
                </span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Google Map
                </option>
                <option>Han Map </option>
                <option>Greedo Map</option>
              </select>
            </label>
          </div>
        </div>
        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Contact Us
          </div>
          <div className="m-auto mb-[3rem]">
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">Email Subject </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={"Miles"}
                className="input input-bordered "
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control mx-5 mt-[3rem]">
                <div className="label">
                  <span className="label-text font-semibold">Email </span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered "
                />
              </label>{" "}
              <label className="form-control mx-5 mt-[3rem]">
                <div className="label">
                  <span className="label-text font-semibold">Phone </span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered "
                />
              </label>
            </div>
            <label className="form-control mx-5 mt-[3rem]">
              <div className="label">
                <span className="label-text font-semibold">Address </span>
              </div>
              <textarea
                className="textarea textarea-bordered "
                placeholder="Address"
              ></textarea>
              <label className="form-control  mt-[3rem]">
                <div className="label">
                  <span className="label-text font-semibold">Support URL </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered "
                />
              </label>
            </label>
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

export default Settings;
