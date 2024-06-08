import React from 'react';
import {Link , NavLink} from 'react-router-dom'
import { FaPaw } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex h-[100px] w-full max-w-[1300px] mx-auto p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center">
        <Link to="/" className="flex items-center">
              <FaPaw className="mr-2" />
            </Link>
         
          
            <Link to="/" className="flex items-center">
          <span>Emporio</span>
          </Link>
        </div>
        <ul className="flex space-x-4">
        <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700 font-bold' : 'text-white font-bold'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
            <li>
          <NavLink
              to="/price"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700 font-bold' : 'text-white font-bold'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Price
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/details"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700 font-bold' : 'text-white font-bold'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Details
            </NavLink>
          </li>
         
        </ul>
        <div className="text-white text-lg flex gap-6 font-bold items-center">
        <NavLink
              to="/product"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? 'text-orange-700' : 'text-white font-bold'
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaCartPlus />
            </NavLink>
          
          <FaSearch />
          <CgProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

