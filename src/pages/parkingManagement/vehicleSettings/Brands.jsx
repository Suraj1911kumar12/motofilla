import React, { useContext, useEffect, useState } from "react";

import "../../style.css";
import { Button, Modal, Switch } from "antd";
import { Table } from "ant-table-extensions";
import Header from "../../../layout/Header";
import { SidebarContext } from "../../../utils/SidebarContext";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../../../Context/AuthContext";
import useColumnSearchProps from "../../../hooks/useColumnSearchProps";

const Brands = () => {
  const [isActive, setIsActive] = useState(true);


  const [brandName, setBrandName] = useState('')

  const [id, setId] = useState('')

  const navigate = useNavigate()
  const auth = UseAuth()

  const baseurl = `http://103.160.107.21:8000/v1/admin`

  const [allBrnadsData, setAllBrandsData] = useState([])

  const handleToggle = () => {
    setUpdateFields({
      isActive: false
    })
  }


  const getAllBrands = async () => {
    try {
      const resp = await axios.get(baseurl + '/brand', {
        headers: {
          Authorization: auth.token
        }
      })
      setAllBrandsData(resp.data.data)
    } catch (error) {
      console.log(error);
    }
  }


  const [expanded, setExpanded] = useContext(SidebarContext);
  const columns = [
    {
      title: "Brand No",
      key: "brandId",
      dataIndex: "brandId",
      render: (_, elem) => (
        <span>{elem?.brandId}</span>
      ),
    },
    {
      title: "BRAND NAME",
      key: 'name',
      dataIndex: 'name',
      ...useColumnSearchProps('name'),
      render: (_, elem) => (
        <span>{elem?.name}</span>
      )
    },

    {
      title: "Status",
      dataIndex: "name",
      key: 'status',
      render: (_, elem) => (
        <span>{elem?.isActive ? "Active" : "Inactive"}</span>
      )
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, elem) => (
        <>
          <Button onClick={(e) => handleDelete(e, elem?._id)}>
            Delete
          </Button>
          <Button onClick={() => showModal(elem?._id)} >
            Edit
          </Button>
        </>
      )
    },
  ];

  const data = [...allBrnadsData.reverse()]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id) => {
    console.log(id);
    setId(id)
    setIsModalOpen(true);
    getUpdateDataApi(id)
  };

  const handleOk = () => {
    setIsModalOpen(false);
    updateBrandData()
    getAllBrands()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBrandNameChange = (e) => {
    setUpdateFields({
      name: e.target.value
    })
  }


  const [updateFields, setUpdateFields] = useState({
    name: '',
    isActive: false,
  })

  useEffect(() => {
    getAllBrands()
  }, [])

  const getUpdateDataApi = async (id) => {
    try {
      const response = await axios.get(baseurl + `/brand/${id}`, {
        headers: {
          'Authorization': auth.token,
        }
      })
      console.log(response.data.data);
      setUpdateFields({
        name: response?.data?.data?.name,
        brandId: response?.data?.data?.brandId,
      })
    } catch (error) {
      console.log(error);
    }
  }


  const handleDelete = async (e, id) => {
    e.preventDefault()
    try {
      const response = await axios.delete(baseurl + `/brand/${id}`, {
        headers: {
          'Authorization': auth.token,
        }
      })
      if (response.status === 200) {
        alert('deleted successfully')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateBrandData = async () => {
    try {
      const response = await axios.put(baseurl + `/brand/${updateFields._id}`, updateFields, {
        headers: {
          'Authorization': auth.token,
        }
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            Vehicle Settings
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'}>Dashboard</Link>
                </li>
                <li>
                  <Link to={'/parkingList'}>Parking List</Link>
                </li>
                <li>
                  <span>Brands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <form onSubmit={""} className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="brandName" className="block  text-sm font-medium text-gray-700">Edit Brand Name </label>
              <input
                type="text"
                id="brandName"
                value={updateFields.name}
                onChange={handleBrandNameChange}
                className="mt-1 block w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="activeSwitch" className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">Active</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <Switch value={updateFields.isActive} onChange={handleToggle} />
                </div>
              </label>
            </div> */}
          </form>
        </Modal>

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
              <p> Brand List</p>
            </div>
            <Link to={'/vehicleSettings/brand/create'} className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-black text-lg mx-3 px-5 py-3">
              + Add Brand
            </Link >
          </div>
          {/* <div className=" mb-3 flex justify-between items-center">
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
          </div> */}
          <div className="pb-5">
            <Table
              exportable searchable
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

export default Brands;
