import { React, PureComponent, useContext, useEffect } from "react";
// import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ComposedChart,
  Area,
  Line,
  Scatter,
} from "recharts";
import { LuDownload, LuPanelTopInactive } from "react-icons/lu";
import { SidebarContext } from "../utils/SidebarContext";
import { MdCancelPresentation, MdHome, MdOutlineWorkspaces } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FaParking, FaWallet } from "react-icons/fa";
import { IoGlobe } from "react-icons/io5";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";

const Home = () => {
  const data = [
    {
      name: "JAN",
      Subscriptions: 2780,
    },
    {
      name: "FAB",
      Subscriptions: 4000,
    },
    {
      name: "MAR",
      Subscriptions: 3000,
    },
    {
      name: "APR",
      Subscriptions: 2000,
    },
    {
      name: "MAY",
      Subscriptions: 5000,
    },
    {
      name: "JUN",
      Subscriptions: 3000,
    },
    {
      name: "JUL",
      Subscriptions: 2000,
    },
  ];
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  const arr = [
    {
      id: 1,
      title: 'Total Orders',
      value: 41,
      icon: <MdHome />
    },
    {
      id: 2,
      title: "Today'a Total Users",
      value: 5,
      icon: <HiUsers />
    },
    {
      id: 3,
      title: "Today's Total parking",
      value: 5,
      icon: <FaParking />
    },
    {
      id: 4,
      title: "Today'a Total Earnings",
      value: 41,
      icon: <IoGlobe />
    },
    {
      id: 5,
      title: "Today's Total Commission",
      value: 5,
      icon: <FaWallet />
    },
    {
      id: 6,
      title: "Today'a Booking Placed",
      value: 5,
      icon: <MdOutlineWorkspaces />
    },
    {
      id: 7,
      title: "Today's Booking Active",
      value: 41,
      icon: <LuPanelTopInactive />
    },
    {
      id: 2,
      title: "Today'a Booking Completed",
      value: 5,
      icon: <HiMiniClipboardDocumentCheck />
    },
    {
      id: 1,
      title: 'Total Booking Cancelled',
      value: 41,
      icon: <MdCancelPresentation />
    },
  ]


  const [expanded, setExpanded] = useContext(SidebarContext);
  // console.warn(process.env.REACT_APP_BASE_URL,"main");
  // useEffect(() => {
  //   setExpanded(false);
  // }, [width]);






  return (
    <>
      <Header />
      <div
        className={`p-6 text-[poppins] h-screen overflow-scroll ${expanded ? "" : " md:ms-[3rem] "
          } `}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium text-[#35415B]">
            Today's Statistics Data 
          </div>

        </div>

        <div className="flex flex-wrap gap-4 my-3">
          {arr.map((item, index) => {
            return (
              <div key={index} className=" card w-[100%] md:w-[40%] xl:w-[32%] hover:shadow-2xl transition-all bg-white shadow-md md:ms-0">
                <div className="card-body ">
                  <div className="card-actions ">
                    <p className="text-black  font-semibold ">{item.title}</p>
                    <button className="btn flex items-center text-xl justify-center  rounded-full  bg-[#35415B] text-[#F07E01] btn-sm">
                      {item.icon}
                    </button>
                  </div>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 py-5">
            <div className="flex justify-between items-center">
              <div className=" text-xl font-medium text-[#35415B]">
                Total Sales
              </div>
              <div className=" flex items-center">
                <select className="select select-sm select-bordered rounded-full w-full max-w-xs focus:outline-none me-5">
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
                <LuDownload
                  size={35}
                  className="font-extrabold"
                  role="button"
                />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f1f1f1" />
                <XAxis dataKey="name"></XAxis>
                <YAxis
                  label={{
                    // value: "SUBSCRIPTIONS",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Bar dataKey="Subscriptions" fill="#E0440E" barSize={20} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
