import React, { useContext } from "react";
import { SidebarContext } from "../utils/SidebarContext";
import Header from "../layout/Header";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";

const VendorListForm = () => {
    const [expanded, setExpanded] = useContext(SidebarContext);
    return (
        <>
            <Header />
            <div
                className={`p-6 font-[poppins] h-screen pb-40 overflow-scroll   ${expanded ? "" : " md:ms-[3rem] "
                    } `}
            >
                <div className="flex justify-between items-center mb-5">
                    <div className="text-xl font-medium text-[#35415B]">Vendor List </div>
                    <div className="">
                        <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
                            <ul>
                                <li>
                                    <Link to={'/'}>Dashboard</Link>
                                </li>
                                <li>
                                    <span>Vendor List</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}
                <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem] py-[2rem]">
                    <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
                        Vendors
                    </div>
                    <div className="m-auto">
                        <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                            <div className="label">
                                <span className="label-text font-semibold">Enter Parking Area Name </span>
                            </div>
                            <input

                                type="email"
                                placeholder="Eg : Goplan Mall"
                                className="input input-bordered  "
                            />
                        </label>
                        <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                            <div className="label">
                                <span className="label-text font-semibold">Enter Vendor Name </span>
                            </div>
                            <input

                                type="email"
                                placeholder="Eg : Goplan Mall"
                                className="input input-bordered  "
                            />
                        </label>
                        <div className="grid grid-cols-2">
                            <label className="form-control mx-5 mt-[1rem] mb-[1rem]" >
                                <div className="label">
                                    <span className="label-text font-semibold">Enter Vendor Name </span>
                                </div>
                                <div className="grid gap-4 grid-cols-2">

                                    <input

                                        type="email"
                                        placeholder="Eg : Goplan Mall"
                                        className="input input-bordered  "
                                    />
                                    <select className="select select-bordered">

                                        <option disabled selected>
                                            All
                                        </option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                    <input

                                        type="email"
                                        placeholder="Eg : Goplan Mall"
                                        className="input input-bordered  "
                                    />
                                    <select className="select select-bordered">

                                        <option disabled selected>
                                            All
                                        </option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                    <input

                                        type="email"
                                        placeholder="Eg : Goplan Mall"
                                        className="input input-bordered  "
                                    />
                                    <select className="select select-bordered">

                                        <option disabled selected>
                                            All
                                        </option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="grid grid-cols-2">
                            <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                <div className="label">
                                    <span className="label-text font-semibold">Upload Images </span>
                                </div>
                                <input

                                    type="text"
                                    className="input input-bordered  "
                                />
                                <div className="my-2  flex justify-end items-end">

                                    <button className="btn px-8 bg-[#f07e01]">
                                        <span className="text-white">Upload</span>
                                    </button>
                                </div>
                            </label>
                            <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                <div className="label">
                                    <span className="label-text font-semibold">Enter Aadhar Number </span>
                                </div>
                                <input

                                    type="text"
                                    className="input input-bordered  "
                                />
                                <div className="my-2  flex justify-end items-end">

                                    <button className="btn px-8 bg-[#f07e01]">
                                        <span className="text-white">Upload</span>

                                    </button>
                                </div>
                            </label>
                            <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                <div className="label">
                                    <span className="label-text font-semibold">Date Of Joining</span>
                                </div>
                                <input
                                    type="date"
                                    className="input input-bordered  "
                                />

                            </label>
                            <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                <div className="label">
                                    <span className="label-text font-semibold">Approval</span>
                                </div>
                                <input type="checkbox" className="toggle toggle-success" />
                            </label>

                        </div>
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

export default VendorListForm;
