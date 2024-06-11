import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import "./style.css";
import { Button, Table } from "antd";
import { SidebarContext } from "../utils/SidebarContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../Context/AuthContext";

const Vendor = () => {
  const auth = UseAuth()

  const baseurl = 'http://103.160.107.21:8000/v1/admin'

  useEffect(() => {
    getVendorData()
  }, [])

  const getVendorData = useCallback(async () => {
    try {
      const resp = await axios.get(baseurl + '/vendor', {
        headers: {
          'Authorization': auth.token,
        }
      })
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }, [])



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
          <div className="text-xl font-medium text-[#35415B]">Vendor</div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <span>Users</span>
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
              />
              Entries
            </div>
            <div className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-white text-lg">
              + Add Parking Prices
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

export default Vendor;
