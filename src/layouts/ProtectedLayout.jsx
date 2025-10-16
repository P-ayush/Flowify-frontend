import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => (
  <>
    <Navbar />
    <div className="p-4">
      <Outlet /> 
    </div>
  </>
);

export default ProtectedLayout;
