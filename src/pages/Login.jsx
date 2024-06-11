import React, { useEffect, useState } from "react";
import logo from "../resorces/Logo.png";
import { UseAuth } from "../Context/AuthContext";
import Loader from "../utils/Loader";

const Login = () => {
  useEffect(() => {
    localStorage.clear()
  }, [])

  const [email, setEmail] = useState("admin@motofila.com")
  const [password, setPassword] = useState("1234")
  const [showHidePassword, setShowHidePassword] = useState(true)
  const auth = UseAuth()

  // console.log(auth.isError)


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" | password !== "") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^[1-9]+[0-9]*$/;

      if (emailRegex.test(email)) {
        auth.loginAction("email", email, password)
      } else if (phoneRegex.test(email)) {
        auth.loginAction("mobile", email, password)
      }
    }
  }


  return (
    <>
      <div className="bg-[#35415B] h-screen w-full sm:p-[4.9rem] py-5">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="m-auto" />
        </div>
        <div className="input-form relative m-5 lg:m-auto bg-[#D9D9D9] p-5 sm:p-[3rem] rounded-lg lg:w-2/4">

          <div className={""}>

            <div className="font-[poppins] font-[500] text-lg mb-5 mt-5 text-[#35415B]">
              Log In
            </div>
            <div className="grid grid-cols-1">
              <div className="mb-3">

                <input
                  type="text"
                  placeholder="Enter email/phone Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input input-bordered w-full rounded-md bg-[#d9d9d9] ${auth.isError && 'border-red-600'} focus:outline-none  placeholder:text-[14px]`}
                />
                {
                  auth.isError === "User not found." &&
                  <span className="error ">*User Not Found</span>
                }
              </div>
              <div className="mb-3">

                <input
                  type={showHidePassword ? "password" : "text"}

                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`input input-bordered ${auth.isError && "border-red-600"}  w-full rounded-md bg-[#d9d9d9] focus:outline-none  placeholder:text-[14px] `}
                />
                {auth.isError ?

                  auth.isError === 'Invalid credential.' ? <span className="error ">*Invalid password</span> : <span className="error ">* Something went wrong</span> : ''

                }
                {/* <p>Show Password</p> */}
                <div className="flex items-center justify-start gap-2 mt-4">
                  <button onClick={() => setShowHidePassword(!showHidePassword)}>
                    {showHidePassword ? "Show" : "Hide"} password</button>

                </div>

              </div>

            </div>
            <div
              className="font-[poppins] text-[#f07e01] font-[400] text-sm underline text-end "
              role="button"
            >
              Forgot password?
            </div>
            <button type="submit" onClick={handleSubmit} className="grid grid-rows-subgrid w-full gap-4 row-span-6">
              <div className="btn  w-full font-[poppins] bg-[#35415B]  font-[400] rounded-md text-[#f07e01] text-lg row-start-4 mb-5 hover:bg-[#35415bf5] border-0">
                Log In
              </div>
            </button>
          </div>
          {
            auth.isLoading && auth.isLoading ?
              <div className="absolute top-0 left-0 flex items-center justify-center min-h-60 h-full w-full backdrop-blur">
                <Loader />
              </div> : null
          }

        </div>

      </div>
    </>
  );
};

export default Login;
