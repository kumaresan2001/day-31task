import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DeleteStud = ({
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://63eb872df1a969340db9f818.mockapi.io/students/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/delete-student"));
  }, []);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };

  return (
    <>
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
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            <div className="container-fluid"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteStud;
