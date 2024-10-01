import React from "react";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-500">
      {/* // left side */}
      <div className="flex">
        <div className="px-2 ">Kindle</div>
        <div className="flex rounded-sm">
          <div className="flex items-center justify-center">
            <FiSearch className="w-5 h-5" />
            <input
              className="rounded-sm border border-gray-700 focus:outline-none focus:border-blue-600 m-1"
              type="text"
              placeholder="Search your kindle"
            />
          </div>
        </div>
      </div>
      {/* // right side */}
      <div className="flex items-center justify-center">
        <div className="flex">
          <CiFilter className="w-5 h-5" />
          <p className="mr-3">Filter</p>
        </div>
        <div className="flex">
          <HiArrowsUpDown className="w-5 h-5" />
          <p className="mr-3">Sort by: Recent</p>
        </div>
        <div className="flex">
          <BsFillGrid3X3GapFill className="w-5 h-5" />
          <p className="mr-3 ml-1">View</p>
        </div>
        <div>
          <FiShoppingCart className="w-5 h-5 mr-3" />
        </div>
        <div>
          <BsThreeDotsVertical className="w-5 h-5 mr-3" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
