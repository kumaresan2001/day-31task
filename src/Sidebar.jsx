import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

const Sidebar = ({
  sidebarToggle,
  setSidebarToggle,
  handleSidebar,
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
  let sidebarClasses = "";
  sidebarClasses += sidebarToggle
    ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";

  let margin = "";
  margin += sidebarToggle ? "8.5px" : "";

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth < 496) {
        setSidebarToggle(false);
      } else {
        setSidebarToggle(true);
      }
    });
  });
  const styles = {
    width: "100%",
    height: "200px",
  };

  return (
    // <!-- Sidebar -->
    <ul className={sidebarClasses} id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <a className="nav-link" href="index.html">
            <i
              className="fas fa-fw fa-tachometer-alt"
              style={{ marginRight: margin }}
            ></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed "
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded={open}
          aria-controls="collapseTwo"
          onClick={handleOpen}
        >
          {/* <i className="fas fa-fw fa-cog" style={{ marginRight: margin }}></i>
          <span>Components</span> */}
          <img
            style={{ height: "50px", width: "50px" }}
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-student-online-learning-kiranshastry-lineal-kiranshastry-3.png"
          />
          &nbsp;&nbsp;
          <span>Student</span>
        </a>
        <Collapse in={open}>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Student:</h6>
              <Link to="/create-student" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="buttons.html">
                  Create Student
                </a>
              </Link>
              <Link to="/list-students" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="cards.html">
                  List Students
                </a>
              </Link>
              <Link to="/edit-student" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="buttons.html">
                  Edit Student
                </a>
              </Link>
              <Link to="/delete-student" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="buttons.html">
                  Delete Student
                </a>
              </Link>
            </div>
          </div>
        </Collapse>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded={open1}
          aria-controls="collapseUtilities"
          onClick={handleOpen1}
        >
          {/* <i
            className="fas fa-fw fa-wrench"
            style={{ marginRight: margin }}
          ></i>
          <span>Utilities</span> */}
          <span>
            <img
              style={{ height: "50px", width: "50px" }}
              src="https://img.icons8.com/ios/50/000000/teacher.png"
            />
            &nbsp;&nbsp;Teacher
          </span>
        </a>
        <Collapse in={open1}>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Teacher:</h6>
              <Link to="/create-teacher" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="utilities-color.html">
                  Create Teacher
                </a>
              </Link>
              <Link to="/teachers" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="utilities-border.html">
                  List Teacher
                </a>
              </Link>
              <Link to="/edit-teacher" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="utilities-animation.html">
                  Edit Teacher
                </a>
              </Link>
              <Link to="/delete-teacher" style={{ textDecoration: "none" }}>
                <a className="collapse-item" href="utilities-other.html">
                  Delete Teacher
                </a>
              </Link>
            </div>
          </div>
        </Collapse>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}

      {/* <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="https://img.lovepik.com/element/45000/6636.png_300.png"
          alt="...."
          style={styles}
        />
      </div>
    </ul>
    // <!-- End of Sidebar -->
  );
};

export default Sidebar;
