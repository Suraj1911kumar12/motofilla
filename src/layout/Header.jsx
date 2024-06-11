import React, { useContext } from "react";
import profileIcon from "../resorces/profile-icon.png";
import { SidebarContext } from "../utils/SidebarContext";
import { RxHamburgerMenu } from "react-icons/rx";
import dummyImage from '../resorces/dummy-image.jpg'
import { MdOutlinePerson } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Header = () => {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  const [expanded, setExpanded] = useContext(SidebarContext);
  const auth = UseAuth()
  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: 'LOG OUT',
    }).then((result) => {
      if (result.isConfirmed) {
        auth.logout()
      }
    })
  }

  return (
    <>
      <div className="navbar bg-[#35415B]">
        <div className="navbar-start">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 text-white ${expanded ? "block" : "hidden"}`}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="navbar-end me-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={profileIcon} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-sm w-52"
            >
              <li>
                <a
                  onClick={() => navigate('/profile')}

                  className=" flex items-center  gap-5 ">
                  <div>
                    <img src={dummyImage} height={55} width={55} className="rounded-full" alt="dummy image" />
                  </div>
                  <div>
                    <p className="font-bold">Tom</p>
                    <span className="">Admin</span>
                  </div>
                </a>

              </li>
              <li className="flex ">
                <a>
                  <MdOutlinePerson />
                  Settings
                </a>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <FaPowerOff />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
