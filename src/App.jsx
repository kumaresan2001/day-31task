import "./App.css";
import Student from "./Student";
import { Routes, Route } from "react-router-dom";
import CreateStud from "./CreateStud";
import EditStud from "./EditStud";
import EditList from "./EditList";
import DeleteList from "./DeleteList";
import DeleteStud from "./DeleteStud";
import Teacher from "./Teacher";
import CreateTeacher from "./CreateTeacher";
import EditListTeach from "./EditListTeach";
import EditTeacher from "./EditTeacher";
import DeleteListTeach from "./DeleteListTeach";
import DeleteTeach from "./DeleteTeach";
import Dashboard from "./Dashboard";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
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
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
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
          }
        />
        <Route
          path="/create-student"
          element={
            <CreateStud
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
          }
        />
        <Route
          path="/edit-student"
          element={
            <EditList
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
          }
        />
        <Route
          path="/edit-student/:id"
          element={
            <EditStud
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
          }
        />
        <Route
          path="/list-students"
          element={
            <Student
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
          }
        />
        <Route
          path="/delete-student"
          element={
            <DeleteList
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
          }
        />
        <Route
          path="/delete-student/:id"
          element={
            <DeleteStud
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
          }
        />
        <Route
          path="/teachers"
          element={
            <Teacher
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
          }
        />
        <Route
          path="/create-teacher"
          element={
            <CreateTeacher
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
          }
        />
        <Route
          path="/edit-teacher"
          element={
            <EditListTeach
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
          }
        />
        <Route
          path="/edit-teacher/:id"
          element={
            <EditTeacher
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
          }
        />
        <Route
          path="/delete-teacher"
          element={
            <DeleteListTeach
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
          }
        />
        <Route
          path="/delete-teacher/:id"
          element={
            <DeleteTeach
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
          }
        />
      </Routes>
    </div>
  );
}

export default App;
