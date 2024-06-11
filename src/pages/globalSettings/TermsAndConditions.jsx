import React, { useState, useRef, useMemo, useContext, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { SidebarContext } from "../../utils/SidebarContext";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";
import axios from 'axios';

const TermsAndConditions = () => {
  const [expanded, setExpanded] = useContext(SidebarContext);
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const [termData, setTermsData] = useState({
    title: "",
    description: "",
    shortdescription: ""
  })
  useEffect(() => {
    getTermsData()
  }, [])

  // ----------------------------------------------------Getting data from Server ------------------------------------------

  const getTermsData = async () => {
    try {
      const response = await axios.get("", {
        headers: {
          'Authorization': localStorage.getItem('Token'),
        }
      })
      console.log(response);
    } catch (error) {
      console.log(
        "Error fetching terms data", error
      );
    }
  }

  // ----------------------------------------------------Posting data to Server ------------------------------------------

  const handleSave = async (e) => {
    e.preventDefault()
    console.log("data", { ...termData });
    try {
      const postResponse = await axios.post("")
      console.log(postResponse);
    } catch (error) {
      console.log("Error while posting Editor data on server", error)
    }
  }

  // ---------------------------------------------------- Adding Configuration for Editor  ------------------------------------------

  const config = useMemo(() => ({
    height: 300,
  }), [])



  return (
    <>
      <Header />
      <div
        className={`p-6 font-[poppins] h-screen overflow-scroll pb-[5rem]  ${expanded ? "" : " md:ms-[3rem] "
          } `}
      >
        <div className="flex justify-between items-center mb-5">
          <div className="text-xl font-medium text-[#35415B]">
            Terms And Conditions
          </div>
          <div className="">
            <div className="text-sm breadcrumbs text-[#35415B] font-semibold">
              <ul>
                <li>
                  <Link to={'/'} >Dashboard</Link>
                </li>
                <li>
                  <span>Terms and Conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------Form--------------------------------------------------------------- */}

        <div className="m-auto p-auto w-5/6 border rounded-md relative my-[5rem] min-h-[50vh]">
          <div className="bg-[#35415B] rounded-md left-12 top-[-1rem] py-1 px-2 absolute text-white">
            Terms And Conditions
          </div>
          <div className="m-auto p-10 flex flex-col gap-4 mb-[3rem]">
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="">Add Title</label>
              <input value={termData.title} onChange={(e) => setTermsData({ ...termData.title, 'title': e.target.value })} type="text" className="input  input-bordered  " placeholder='Title' />
            </div>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="">Add Decsription</label>
              <JoditEditor
                ref={editor}
                value={termData.description}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(e) => setTermsData({ ...termData.description, 'description': e })}
              />
            </div>
            <div className='flex flex-col gap-2 text-black'>
              <label htmlFor="">Add Short Decsription</label>
              <input value={termData.shortdescription} onChange={(e) => setTermsData({ ...termData.shortdescription, 'shortdescription': e.target.value })} type="text" className="input input-bordered  " placeholder='Short Description' />
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <span onClick={handleSave}
            className="me-2 border w-fit  py-1 rounded-md bg-[#35415B] text-white px-7"
            role="button"
          >
            Save
          </span>
          <span
            className="ms-2 border w-fit  py-1 rounded-md bg-[#35415B] text-white px-7"
            role="button"
          >
            Back
          </span>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
