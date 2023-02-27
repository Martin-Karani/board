import React from "react";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import {
  BsInbox,
  BsCalendarCheck,
  BsSearch,
  BsQuestionLg,
} from "react-icons/bs";
import { RiApps2Fill } from "react-icons/ri";
import { HiOutlineUserAdd } from "react-icons/hi";

export function SideBar() {
  return (
    <aside>
      <div className="flex flex-col items-center justify-between h-screen p-3 w-fit bg-surface">
        <div className="flex flex-col items-center">
          <div className="mb-4 hover:bg-black p-1.5 rounded-md">
            <RxNotionLogo size={30} />
          </div>
          <div className="mb-2 hover:bg-black p-1.5 rounded-md">
            <MdOutlineNotificationsNone size={24} color="white" />
          </div>
          <div className="mb-2 hover:bg-black p-1.5 rounded-md">
            <BsInbox size={20} color="white" />
          </div>
          <div className="mb-2 hover:bg-black p-1.5 rounded-md">
            <BsCalendarCheck size={20} color="white" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className=" mb-2 hover:bg-black p-1.5 rounded-md">
            <HiOutlineUserAdd size={20} color="white" />
          </div>
          <div className=" mb-2 hover:bg-black p-1.5 rounded-md">
            <BsSearch size={20} color="white" />
          </div>
          <div className=" mb-2 hover:bg-black p-1.5 rounded-md">
            <BsQuestionLg size={20} color="white" />
          </div>
          <div className=" mb-2 hover:bg-black p-1.5 rounded-md">
            <RiApps2Fill size={20} color="white" />
          </div>
          <div className="mb-3 rounded-md">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              className="w-10 rounded-full"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
