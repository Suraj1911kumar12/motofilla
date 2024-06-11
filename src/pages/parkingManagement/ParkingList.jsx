import React, { useContext, useState } from "react";

import "../style.css";
import { Button, Table } from "antd";
import Header from "../../layout/Header";
import { SidebarContext } from "../../utils/SidebarContext";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";

const ParkingList = () => {
  const [expanded, setExpanded] = useContext(SidebarContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [];
  for (let i = 0; i < 18; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
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
          <div className="text-xl font-medium text-[#35415B]">Parking List</div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'}>Dashboard</Link>
                </li>
                <li>
                  <span>Parking List</span>
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
          <div className=" mb-3 flex justify-center items-center">
            <div className="btn bg-[#35415B] border-0 text-white font-normal hover:text-black text-lg mx-3 flex px-5 py-3">
              <MdOutlineFormatListBulleted size={20} />
              <p> Parking List</p>
            </div>
            <div className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-black text-lg mx-3 px-5 py-3">
              + Create Parking
            </div>
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
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingList;
