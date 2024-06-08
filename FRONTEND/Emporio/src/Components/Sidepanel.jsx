// src/components/Sidebar.jsx
import React from "react";
import {
  FaHome,
  FaList,
  FaTags,
  FaStore,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidepanel = () => {
  return (
    <div className="bg-red-600 text-white w-64 h-screen flex flex-col p-4">
      <div className="flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded"
        >
          <FaHome />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded"
        >
          <FaList />
          <span>Product List</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded "
        >
          <FaTags />
          <span>Price Categories</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded"
        >
          <FaStore />
          <span>Online Stores</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded"
        >
          <FaChartLine />
          <span>Price Range</span>
        </a>
      </div>
      <div className="mt-auto flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded"
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidepanel;
