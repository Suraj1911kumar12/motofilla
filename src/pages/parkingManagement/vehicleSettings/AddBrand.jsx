import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../../../utils/SidebarContext';
import Header from '../../../layout/Header';
import { Form, Switch } from 'antd';

const AddBrand = () => {
    const [expanded, setExpanded] = useContext(SidebarContext);

    const [brandName, setBrandName] = useState('');

    const [isActive, setIsActive] = useState(true);

    const handleBrandNameChange = (e) => {
        setBrandName(e.target.value);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Brand Name:', brandName);
        console.log('Is Active:', isActive);
    };

    return (
        <>
            <Header />
            <div
                className={`p-6 font-[poppins] h-screen overflow-scroll  ${expanded ? "" : " md:ms-[3rem] "
                    } `}
            >
                <div className="flex justify-between items-center mb-5">
                    <div className="text-xl font-medium text-[#35415B]">
                        Add Brands
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

                <div>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="brandName" className="block  text-sm font-medium text-gray-700">Add Brand</label>
                            <input
                                type="text"
                                id="brandName"
                                value={brandName}
                                onChange={handleBrandNameChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="activeSwitch" className="flex items-center">
                                <span className="text-sm font-medium text-gray-700 mr-2">Active</span>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <Switch defaultChecked onChange={handleToggle} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default AddBrand