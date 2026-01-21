import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import TeacherAdd from "./components/TeacherAdd";
import UserLogin from "./components/UserLogin";
import TeachersList from "./components/TeachersList";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/add_teacher" element={<TeacherAdd />} />
          <Route path="/logins" element={<UserLogin />} />
          <Route path="/teacher_list" element={<TeachersList />} />
        </Route>
      </Routes>
    </div>
  );
}
