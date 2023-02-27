import React from "react";
// icons
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

function BoardNav() {
  return (
    <div>
      <div className="p-1 pb-0 border-b border-borderColor">
        <div className="flex items-center divide-x divide-hoverColor">
          <div className="flex items-center gap-2  border-b-2 border-blue w-fit p-1.5 mr-1 hover:bg-hoverColor hover:rounded-md">
            <div>
              <HiOutlineHome />
            </div>
            <p className="text-sm ">Main Table</p>
          </div>

          <div className="p-1.5 hover:bg-hoverColor hover:rounded ">
            <AiOutlinePlus size={12} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 py-4">
        <div className="flex ">
          <button className="bg-primary rounded-l px-4 py-1.5 text-white m-0 text-sm hover:bg-primaryHoverColor ">
            New Item
          </button>
          <button className="m-0 text-white border-l rounded-r bg-primary border-hoverColor hover:bg-primaryHoverColor ">
            <RiArrowDropDownLine size={25} />
          </button>
        </div>

        <button className="flex items-center py-1.5  px-2 text-sm gap-1 rounded hover:bg-hoverColor">
          <CiSearch size={20} />
          <span>Search</span>
        </button>

        <button className="flex items-center py-1.5  px-2 text-sm gap-1 rounded hover:bg-hoverColor">
          <IoPersonOutline size={19} />
          <span>Person</span>
        </button>
      </div>
    </div>
  );
}

export default BoardNav;
