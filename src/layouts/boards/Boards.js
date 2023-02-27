import React, { useState } from "react";

import {
  IoAddCircleSharp,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { HiOutlineClipboardCopy } from "react-icons/hi";

export function Boards() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="relative h-screen px-5 py-4 border-r bg-background w-fit border-layoutBorder">
      {isSidebarOpen ? (
        <>
          <div className="flex justify-between">
            <h4 className="text-lg">Boards</h4>
            <IoAddCircleSharp size={28} color={"#0073ea"} />
          </div>
          <div className="flex items-center justify-between gap-2 mt-3 mb-5">
            <CiSearch />
            <input
              type="search"
              placeholder="Search"
              className="block text-sm text-gray-900 focus:outline-none p-1.5 rounded-md"
            />
          </div>

          <button className="flex items-center align-center bg-selectedColor w-full rounded-md px-2 py-1.5 gap-2 mt-4">
            <HiOutlineClipboardCopy size={20} color="black" />
            <span className="text-sm">New Board</span>
          </button>
          <div
            className="absolute bg-white top-4 -right-4 rounded-xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoChevronBackCircleOutline size={26} color="#dcdfec" />
          </div>
        </>
      ) : (
        <div
          className="absolute bg-white top-4 -right-4 rounded-xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          <IoChevronForwardCircleOutline size={26} color="#dcdfec" />
        </div>
      )}
    </div>
  );
}
