import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function EditStud({
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

  const [student, setStudent] = useState("");

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/students/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setStudent(data))
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
                {student ? <EditStudentForm student={student} /> : "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EditStudentForm({ student }) {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [teacher, setTeacher] = useState(student.teacher);
  const [batch, setBatch] = useState(student.batch);
  const [marks, setMarks] = useState(student.marks);

  const navigate = useNavigate();
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };

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
          onChange={(event) => setTeacher(event.target.value)}
          label="Teacher"
          value={teacher}
          variant="standard"
        />

        <TextField
          onChange={(event) => setBatch(event.target.value)}
          label="Batch"
          value={batch}
          variant="standard"
        />

        <TextField
          onChange={(event) => setMarks(event.target.value)}
          label="Marks"
          value={marks}
          variant="standard"
        />
      </div>

      <Button
        className="add-button"
        onClick={() => {
          const updatedStudent = {
            name: name,
            email: email,
            phone: phone,
            teacher: teacher,
            batch: batch,
            marks: marks,
          };

          fetch(
            `https://62e3c20ab54fc209b8903197.mockapi.io/students/${student.id}`,
            {
              method: "PUT",
              body: JSON.stringify(updatedStudent),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((data) => data.json())
            .then(() => navigate("/edit-student"));
        }}
        variant="contained"
      >
        Update
      </Button>
    </div>
  );
}
