import React, { useContext, useState } from "react";

import "../style.css";
import { Button, Table } from "antd";
import Header from "../../layout/Header";
import { SidebarContext } from "../../utils/SidebarContext";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentParkingReports = () => {
  const [expanded, setExpanded] = useContext(SidebarContext);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  const data = [];
  for (let i = 0; i < 9; i++) {
    data.push({
      key: i,
      date: `09-05-2024 12:1${i}`,
      name: `Edward King ${i}`,
      id: `ASI${i}57${i + 5}`,
      active: (
        <input
          type="checkbox"
          className="toggle toggle-success toggle-sm focus:outline-none"
          defaultChecked
        />
      ),
      address: `London, Park Lane no. ${i}`,
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <Header />
      <div
        className={`p-6 font-[poppins] h-screen overflow-scroll  ${expanded ? "" : " md:ms-[3rem] "
          } `}
      >
        <div className="flex justify-between items-center mb-5">
          <div className="text-xl font-medium text-[#35415B]">
            Users Wallet Transactions
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'}>Dashboard</Link>
                </li>
                <li>
                  <Link to={'/parkingList'}>Parking Reports</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>

          <div className=" mb-3 flex justify-between items-center">
            <div className="">
              Show{" "}
              <input
                type="number"
                className="px-3 py-2 border border-black w-14"
                value={10}
              />{" "}
              entries
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
          <div className="pb-5">
            <Table columns={columns} dataSource={data} className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentParkingReports;
