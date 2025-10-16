import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const navigate = useNavigate();

const logout = useAuthStore((state) => state.logout); 

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate("/dashboard")}>
        Flowify
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
