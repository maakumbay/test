"use client";
import React from "react";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillHouseDoorFill,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting
} from "react-icons/ai";
import {  RiDashboardFill } from "react-icons/ri";
import { useState } from "react";

function Sidebara() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <RiDashboardFill /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      submenu: true,
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 1" },
        { title: "Submenu 1" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-[#4E73DF] h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-[#4E73DF] cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsFillHouseDoorFill
            className={`text-white text-3xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              !open && "rotate-[360deg]"
            } `}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "hidden"
            }`}
          >
            MC Control Panel
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-purple-300 rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill /> }
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  } `}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => {
                      setSubmenuOpen(!submenuOpen);
                    }}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-purple-300 rounded-md ${
                        menu.spacing ? "mt-9" : "mt-2"
                      }`}
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebara;
