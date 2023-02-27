import React from "react";
// icons
import { BsThreeDots } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { RxShare1 } from "react-icons/rx";

export function BoardHeader() {
  return (
    <div className="flex items-center justify-between w-full h-fit ">
      <div className="flex items-center gap-4">
        <div>
          <RxShare1 size={22} />
        </div>
        <h3 className="text-3xl	font-semibold text-textColor">New Board</h3>
        <div>
          <CiStar size={22} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="border border-borderColor text-sm rounded-md px-2 py-1.5 gap-2 mt-4">
          Board Power-Ups
        </button>
        <div>
          <BsThreeDots size={22} />
        </div>
      </div>
    </div>
  );
}
