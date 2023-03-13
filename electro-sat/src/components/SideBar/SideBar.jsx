import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import USDInfoBox from "../USDInfoBox/USDInfoBox";
import "./index.css";

function SideBar() {
  return (
    <div className="fixed bg-primary h-screen  w-40 right-0 top-24 z-0    ">
      <div className="side-link w-full  font-bold   text-xs ">
        <NavLink to={"/dashboard"}>
          <p className=" w-full h-12  mb-3 flex items-center justify-center">
            لوحة القيادة
          </p>
        </NavLink>
        <NavLink to={"/daily"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            اليوميه
          </p>
        </NavLink>

        <NavLink to={"/stock"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            البضاعه
          </p>
        </NavLink>

        <NavLink to={"/login"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            المصاريف
          </p>
        </NavLink>
        <NavLink to={"/login"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            الديون
          </p>
        </NavLink>
        <NavLink to={"/login"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            السجلات
          </p>
        </NavLink>
        <NavLink to={"/login"}>
          <p className="w-full h-12  mb-3 flex items-center justify-center  hover:opacity-80 ">
            الموردون
          </p>
        </NavLink>
      </div>
      <div className="">
        <USDInfoBox />
        <div className="setting mt-3 flex items-center justify-center  cursor-pointer ">
          <button className="text-sm text-white hover:opacity-80">
            الاعدادات
          </button>
          <FontAwesomeIcon
            icon={faGear}
            className=" text-secondary ml-3 hover:animate-spin "
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
