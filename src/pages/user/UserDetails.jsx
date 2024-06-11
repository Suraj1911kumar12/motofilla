import React, { useContext, useState } from "react";
import Header from "../../layout/Header";
import { SidebarContext } from "../../utils/SidebarContext";
import amia from "../../resorces/amia.png";
import { Table } from "antd";
import { FaPhone, FaUser } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

const UserDetails = () => {
  const [expanded, setExpanded] = useContext(SidebarContext);

  const ParkingList = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const walletTransactions = [
    {
      title: "Id",
      dataIndex: "id",
    },

    {
      title: "PaymentMethod",
      dataIndex: "paymentMethod",
    },

    {
      title: "Txn Id",
      dataIndex: "txnId",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Note",
      dataIndex: "note",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
    },
  ];
  const myBookings = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Date & Time",
      dataIndex: "date&Time",
    },

    {
      title: "Duration",
      dataIndex: "duration",
    },

    {
      title: "Slot",
      dataIndex: "slot",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const BookedParking = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Duration",
      dataIndex: "duration",
    },

    {
      title: "Slot",
      dataIndex: "slot",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const vehicleList = [
    {
      title: "Car Number",
      dataIndex: "carNumber",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },

    {
      title: "Modal",
      dataIndex: "modal",
    },

    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      key: 1,
      name: `Edward King 5`,
      age: 32,
      status: (
        <input
          type="checkbox"
          className="toggle toggle-success toggle-sm focus:outline-none"
          defaultChecked
        />
      ),
      address: `London, Park Lane no. 1`,
    },
    {
      key: 5,
      name: `Edward King 1`,
      age: 32,
      status: (
        <input
          type="checkbox"
          className="toggle toggle-success toggle-sm focus:outline-none"
          defaultChecked
        />
      ),
      address: `London, Park Lane no. 5`,
    },
  ];
  const [hName, setHname] = useState("Parking List");
  const [column, setColumn] = useState(ParkingList);
  return (
    <>
      <Header />
      <div
        className={`p-6 font-[poppins] h-screen overflow-scroll ${
          expanded ? "" : " md:ms-[3rem] "
        } `}
      >
        <div className="flex justify-between items-center mb-5">
          <div className="text-xl font-medium text-[#35415B]">Users</div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a href="/user">Users</a>
                </li>
                <li>
                  <span className="text-gray-400">User Details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-10">
            <div className="col-span-3 m-2">
              <div className="card rounded-lg bg-[#a6abb7] p-1">
                <div className="card-head mt-5 m-auto">
                  <img src={amia} alt="amia " />
                </div>
                <div className="card-body text-black">
                  <p className="font-medium text-2xl text-center font-[poppins]">
                    Amia
                  </p>
                  <p className="font-medium text-2xl text-center font-[poppins]">
                    Wallet Balance: <span className="font-sans"> ₹ </span>{" "}
                    <span className="text-gray-600">2000 </span>
                  </p>
                  <div className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-black text-lg m-auto w-60 my-2">
                    + Add Wallet Amount
                  </div>
                  <div className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-black text-lg m-auto w-60 mb-2">
                    + Add Vehicle
                  </div>
                </div>
              </div>
              <div className=" my-5">
                <div className=" flex items-center text-lg text-[#35415B] my-5">
                  <span className="mx-3">
                    <FaUser />
                  </span>{" "}
                  Female
                </div>
                <div className=" flex items-center text-lg text-[#35415B] my-5">
                  <span className="mx-3">
                    <IoMailSharp />
                  </span>{" "}
                  admin@abc.com
                </div>
                <div className=" flex items-center text-lg text-[#35415B] my-5">
                  <span className="mx-3">
                    <FaPhone />
                  </span>{" "}
                  +91 8888888888
                </div>
                <div className=" flex items-center text-lg text-[#35415B] my-5">
                  <span className="mx-3">
                    <ImLocation2 />
                  </span>{" "}
                  Banglore, India
                </div>
              </div>
            </div>
            <div className="col-span-7 m-2">
              <div className="head bg-[#35415B] flex items-center justify-between text-white p-3">
                <p
                  className={`${
                    hName === "Parking List"
                      ? "btn text-white bg-[#f07e01] border-0 hover:text-[#35415B]"
                      : ""
                  }`}
                  role="button"
                  onClick={() => {
                    setHname("Parking List");
                    setColumn(ParkingList);
                  }}
                >
                  Parking List
                </p>
                <p
                  role="button"
                  className={`${
                    hName === "Booked Parking"
                      ? "btn text-white bg-[#f07e01] border-0 hover:text-[#35415B]"
                      : ""
                  }`}
                  onClick={() => {
                    setHname("Booked Parking");
                    setColumn(BookedParking);
                  }}
                >
                  Booked Parking
                </p>
                <p
                  role="button"
                  className={`${
                    hName === "My Bookings"
                      ? "btn text-white bg-[#f07e01] border-0 hover:text-[#35415B]"
                      : ""
                  }`}
                  onClick={() => {
                    setHname("My Bookings");
                    setColumn(myBookings);
                  }}
                >
                  My Bookings
                </p>
                <p
                  role="button"
                  className={`${
                    hName === "Vehicle List"
                      ? "btn text-white bg-[#f07e01] border-0 hover:text-[#35415B]"
                      : ""
                  }`}
                  onClick={() => {
                    setHname("Vehicle List");
                    setColumn(vehicleList);
                  }}
                >
                  Vehicle List
                </p>
                <p
                  role="button"
                  className={`${
                    hName === "Wallet Transactions"
                      ? "btn text-white bg-[#f07e01] border-0 hover:text-[#35415B]"
                      : ""
                  }`}
                  onClick={() => {
                    setHname("Wallet Transactions");
                    setColumn(walletTransactions);
                  }}
                >
                  Wallet Transactions
                </p>
              </div>
              <div className=" my-3 flex justify-between items-center">
                <div className="">
                  Show{" "}
                  <input
                    type="number"
                    className="px-3 py-2 border border-black w-14"
                    value={10}
                  />
                  Entries
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <Table columns={column} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
