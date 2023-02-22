import React from "react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DeleteList = ({
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
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  function getStudents() {
    fetch("https://63eb872df1a969340db9f818.mockapi.io/students", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setStudents(res))
      .catch((e) => console.log(e));
  }

  useEffect(() => getStudents(), []);
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
            <div className="container-fluid">
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">Batch</th>
                      <th scope="col">Marks</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((stud) => {
                      return (
                        <tr>
                          <th scope="row">{stud.id}</th>
                          <td>{stud.name}</td>
                          <td>{stud.email}</td>
                          <td>{stud.phone}</td>
                          <td>{stud.teacher}</td>
                          <td>{stud.batch}</td>
                          <td>{stud.marks}</td>
                          <td>
                            <IconButton
                              onClick={() =>
                                navigate(`/delete-student/${stud.id}`)
                              }
                              color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteList;
