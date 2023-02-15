import React, { useState } from "react";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import Login from "./Login";
import Logout from "./Logout";

const Dashboard = ({
  handleOpen,
  handleOpen1,
  handleOpen2,
  open,
  open1,
  open2,
  setOpen,
  setOpen1,
  setOpen2,
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };
  return (
    <div>
      <div id="wrapper">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          open1={open1}
          setOpen1={setOpen1}
          handleOpen1={handleOpen1}
          open2={open2}
          setOpen2={setOpen2}
          handleOpen2={handleOpen2}
        />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Navbar
            // sidebarToggle={sidebarToggle}
            // setSidebarToggle={setSidebarToggle}
            // handleSidebar={handleSidebar}
            // open={open}
            // setOpen={setOpen}
            // handleOpen={handleOpen}
            // open1={open1}
            // setOpen1={setOpen1}
            // handleOpen1={handleOpen1}
            // open2={open2}
            // setOpen2={setOpen2}
            // handleOpen2={handleOpen2}
            />

            {/* Begin Page Content */}
            <div className="container-fluid">
              <Login />
            </div>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
