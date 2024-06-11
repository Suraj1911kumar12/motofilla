import React, { useContext, useEffect, useState } from "react";

import "../../style.css";
import { Button, Modal, Switch, Table } from "antd";
import Header from "../../../layout/Header";
import { SidebarContext } from "../../../utils/SidebarContext";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios, { all } from "axios";
import { UseAuth } from "../../../Context/AuthContext";

const Modals = () => {
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const baseurl = `http://103.160.107.21:8000/v1/admin`
  const auth = UseAuth()
  const [allModalData, setAllModalData] = useState([])

  const [expanded, setExpanded] = useContext(SidebarContext);


  const [updateFields, setUpdateFields] = useState({
    name: '',
    slug: "",
    isActive: false,
    brandId: "",
    segment: null
  })



  useEffect(() => {
    getModalData()
  }, [])
  const getModalData = async () => {
    try {
      const response = await axios.get(baseurl + '/model', {
        headers: {
          'Authorization': auth.token,
        }
      })
      // console.log(response);
      setAllModalData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const data = [...allModalData.reverse()]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    handleUpdate()
    // setIsModalOpen(false);
    getModalData()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBrandNameChange = (e) => {
    const { name, value } = e.target
    setUpdateFields({
      [name]: value
    })
  }

  const showModal = (id) => {
    setId(id)
    getUpdateDataApi(id)
    setIsModalOpen(true);
  };

  const getUpdateDataApi = async (id) => {
    try {
      const response = await axios.get(baseurl + `/model/${id}`, {
        headers: {
          'Authorization': auth.token,
        }
      })
      console.log(response.data.data);
      setUpdateFields({
        name: response?.data?.data?.name,
        brandId: response?.data?.data?.brandId,
        segment: response?.data?.data?.segment,
        isActive: response?.data?.data?.isActive
      })
    } catch (error) {
      console.log(error);
    }
  }


  const handleUpdateActive = (e) => {
    console.log(e);
    setUpdateFields({
      isActive: e == 'true' ? true : false
    })
  }

  const handleUpdate = async () => {
    try {
      console.log(updateFields);
      const response = await axios.put(baseurl + `/model/${id}`, {
        name: updateFields.name,
        isActive: updateFields.isActive,
        slug: updateFields.slug,
        segment: updateFields.segment,
        brandId: updateFields.brandId,
      }, {
        headers: {
          'Authorization': auth.token,
        }
      })
      console.log(response);
      if (response.status === 200) {
        setIsModalOpen(false);
        getModalData()
      }
    } catch (error) {
      console.log(error);
    }
  }



  const handleDelete = async (e, id) => {
    e.preventDefault()
    try {
      const response = await axios.delete(baseurl + `/model/${id}`, {
        headers: {
          'Authorization': auth.token,
        }
      })
      if (response.status === 200) {
        alert('deleted successfully')
        getModalData()
      }
    } catch (error) {
      console.log(error);
    }
  }


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
      render: (_, elem) => (
        <span>{elem?.name}</span>
      )
    },
    {
      title: "Segment",
      key: 'segment',
      dataIndex: 'segment',
      render: (_, elem) => (
        <span>{elem?.segment}</span>
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
                  <span>Modals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <form onSubmit={""} className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="brandName" className="block  text-sm font-medium text-gray-700">Edit Brand</label>
              <input
                type="text"
                id="brandName"
                name="name"
                value={updateFields.name}
                onChange={handleBrandNameChange}
                className="mt-1 block w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="segment" className="block  text-sm font-medium text-gray-700">Edit Segment</label>
              <input
                type="text"
                id="segment"
                name="segment"
                value={updateFields.segment}
                onChange={handleBrandNameChange}
                className="mt-1 block w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="brandName" className="block  text-sm font-medium text-gray-700">Edit Brand</label>
              <input
                type="text"
                id="brandName"
                name="name"
                value={updateFields.name}
                onChange={handleBrandNameChange}
                className="mt-1 block w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div> */}
            {/* <div className="mb-4">
              <label htmlFor="activeSwitch" className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">Active</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <Switch  value={updateFields.isActive} onChange={handleUpdateActive} />
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
              <p> Modal List</p>
            </div>
            <div onClick={() => navigate('/vehicleSettings/modal/create')} className="btn bg-[#f07e01] border-0 text-white font-normal hover:text-black text-lg mx-3 px-5 py-3">
              + Add Modal
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

export default Modals;
