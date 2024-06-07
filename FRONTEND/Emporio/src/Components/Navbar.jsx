import React from 'react';
import { FaPaw } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-[100px] mx-auto my-4 w-[1300px] p-4">
        <div className="container mx-auto flex gap-[90px] items-center">
          <div className="text-white text-lg font-bold flex items-center">
            <FaPaw />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white font-bold hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white font-bold hover:text-gray-300">Price</a>
            </li>
            <li>
              <a href="#" className="text-white font-bold hover:text-gray-300">Products</a>
            </li>
            <li>
              <a href="#" className="text-white font-bold hover:text-gray-300">Compare</a>
            </li>
          </ul>
        </div>
        <div className="text-white text-lg gap-[25px] font-bold flex items-center">
          <FaCartShopping />
          <FaSearch />
          <CgProfile />
        </div>
      </nav>
      <hr className="border-gray-600 mx-auto my-4 w-[1300px]" />
    </>
  );
}

export default Navbar;
