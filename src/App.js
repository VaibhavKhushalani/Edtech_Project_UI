import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import DashBoard from "./Component/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
