import React, { useContext, useState } from "react";
import { SidebarContext } from "../utils/SidebarContext";
import Header from "../layout/Header";
import axios from "axios";
import { UseAuth } from "../Context/AuthContext";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";

const updatePRofileUrl = "http://103.160.107.21:8000/api/admin/update-profile"

const Profile = () => {

    // ---------------------------------------------------- All States ------------------------------------------

    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState(localStorage.getItem("Email") || "");
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [expanded, setExpanded] = useContext(SidebarContext);

    const [isLoading, setIsLoading] = useState()

    const [isError, setIsError] = useState(false)

    const auth = UseAuth()

    // console.log(auth.token)

    // ---------------------------------------------------- Updating Profile ------------------------------------------
    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        // Handle form submission here
        if (newPassword !== "" && oldPassword !== "" && confirmPassword !== "") {
            try {

                if (confirmPassword === newPassword) {
                    const response = await axios.post(updatePRofileUrl, {
                        name: userType,
                        email: email,
                        oldPassword: oldPassword,
                        password: newPassword,
                        confirmPassword: confirmPassword
                    }, {
                        headers: {
                            Authorization: auth.token
                        }
                    })
                    console.log(response)
                    setIsLoading(false)
                    alert("profile Updated succesfully")
                    setConfirmPassword("")
                    setNewPassword("")
                    setOldPassword("")
                    setIsError(false)
                }
                else {
                    setIsError("Confirm and New Password not matched")
                    // window.alert("Confirm and New Password not matched")
                    // setConfirmPassword("")
                    // setNewPassword("")
                    // setOldPassword("")
                    setIsLoading(false)
                }
            } catch (error) {
                console.warn("error while updating profile", error);
                setIsLoading(false)
                const errorResponse = error.response.data.msg
                setIsError(errorResponse)
                // alert(errorResponse)
            }
        }
        else {
            window.alert("Please fill all the fields")
            setIsLoading(false)
        }

    };
    return (
        <>
            <Header />

            <div
                className={`p-6 font-[poppins] h-screen overflow-scroll pb-[5rem]  ${expanded ? "" : " md:ms-[3rem] "
                    } `}
            >
                <div className="flex justify-between items-center mb-5">



                    <div className="text-xl font-medium text-[#35415B]">
                        Profile
                    </div>

                    <div className="">
                        <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
                            <ul>
                                <li>
                                    <Link to={'/'}>Dashboard</Link>
                                </li>
                                <li>
                                    <span>Profile</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


                {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}

                {
                    isLoading ? <>
                        <Loader />
                    </> : <>

                        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem]">
                            <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
                                Profile Details
                            </div>
                            <div className="m-auto">
                                <div className="">
                                    <label className="form-control mx-5 mt-[3rem] ">
                                        <div className="label">
                                            <span className="label-text font-semibold">Select User </span>
                                        </div>
                                        <select onChange={(e) => setUserType(e.target.value)} value={userType} className="select select-bordered">

                                            <option disabled selected>
                                                All
                                            </option>
                                            <option>Admin</option>
                                            <option>User</option>
                                        </select>
                                    </label>



                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                        <div className="label">
                                            <span className="label-text font-semibold">Email </span>
                                        </div>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Email here"
                                            className="input input-bordered  "
                                        />
                                    </label>
                                    <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                        <div className="label">
                                            <span className="label-text font-semibold">Old Password </span>
                                        </div>
                                        <input
                                            type="text"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            placeholder="Type here New Password"
                                            className="input input-bordered  "
                                        />
                                        {
                                            isError === "Your current password is wrong." &&
                                            <p className="error">*Old password is incorrect</p>
                                        }
                                    </label>
                                    <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                        <div className="label">
                                            <span className="label-text font-semibold">New Password </span>
                                        </div>
                                        <input
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            type="password"
                                            placeholder="Type here New Password"
                                            className="input input-bordered  "
                                        />
                                        {
                                            isError === "Confirm and New Password not matched" &&
                                            <p className="error">*new password and confirm password nat matched</p>
                                        }
                                    </label>
                                    <label className="form-control mx-5 mt-[1rem] mb-[1rem]">
                                        <div className="label">
                                            <span className="label-text font-semibold">Confirm Password </span>
                                        </div>
                                        <input
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            type="text"
                                            placeholder="Confirm password "
                                            className="input input-bordered  "
                                        />
                                        {
                                            isError === "Confirm and New Password not matched" &&
                                            <p className="error">*new password and confirm password nat matched</p>
                                        }
                                    </label>

                                </div>

                            </div>

                        </div>
                        <div className="flex items-center gap-4 justify-center">

                            <button
                                className=" border w-fit px-2 py-1 rounded-md bg-[#35415B] flex justify-between text-white"
                                role="button"
                                onClick={handleUpdate}
                            >
                                {/* <LuDownload size={20} className="me-1" />{" "} */}
                                <p className=" ">Save</p>
                            </button>
                            <button
                                className=" border w-fit px-2 py-1 rounded-md bg-[#35415B] flex justify-between text-white"
                                role="button"
                            >
                                {/* <LuDownload size={20} className="me-1" />{" "} */}
                                <p className=" ">Back</p>
                            </button>
                        </div>

                    </>
                }
            </div>
            <div>

            </div>
        </>
    );
};

export default Profile;
