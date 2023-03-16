import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import userImg from "../../assets/images/userImg.png";
import { DataGrid } from "@mui/x-data-grid";

function Category() {
  const { title } = useParams();
 

  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44 flex flex-col items-end  ">
        <div className="top-bar bg-greyBar h-14 py-2  w-3/4 rounded-lg flex items-center  justify-end font-bold  mb-3 text-white">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 ">
            اضافه منتج
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            اضافه صنف
          </button>
        </div>

     
      </main>
    </>
  );
}

export default Category;
