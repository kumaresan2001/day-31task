import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function EditTeacher({
  handleOpen,
  handleOpen1,
  handleOpen2,
  open,
  open1,
  open2,
  setOpen,
  setOpen1,
  setOpen2,
}) {
  const { id } = useParams();

  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/teachers/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setTeacher(res))
      .catch((e) => console.log(e));
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
            <div className="container-fluid">
              <div>
                {teacher ? <EditTeacherForm teacher={teacher} /> : "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EditTeacherForm({ teacher }) {
  const [name, setName] = useState(teacher.name);
  const [email, setEmail] = useState(teacher.email);
  const [phone, setPhone] = useState(teacher.phone);
  const [batches, setBatches] = useState(teacher.batches);

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-user">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          value={name}
          variant="standard"
        />

        <TextField
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          value={email}
          variant="standard"
        />

        <TextField
          onChange={(event) => setPhone(event.target.value)}
          label="Phone"
          value={phone}
          variant="standard"
        />

        <TextField
          onChange={(event) => setBatches(event.target.value)}
          label="Batches"
          value={batches}
          variant="standard"
        />
      </div>

      <Button
        className="add-button"
        onClick={() => {
          const updatedTeacher = {
            name: name,
            email: email,
            phone: phone,
            batches: batches,
          };

          fetch(
            `https://62e3c20ab54fc209b8903197.mockapi.io/teachers/${teacher.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedTeacher),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((data) => data.json())
            .then(() => navigate("/edit-teacher"));
        }}
        variant="contained"
      >
        Update
      </Button>
    </div>
  );
}
