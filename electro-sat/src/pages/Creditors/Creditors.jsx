import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import userImg from "../../assets/images/userImg.png";

function Creditors() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed   w-[80%] h-full flex flex-col items-end  overflow-y-auto overflow-x-hidden    top-28  right-44 text-white font-bold"></main>
    </>
  );
}

export default Creditors;
