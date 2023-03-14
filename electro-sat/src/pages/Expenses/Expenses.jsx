import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import userImg from "../../assets/images/userImg.png"; 

function Expenses() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44">
        <div className="flex justify-start   gap-4 flex-wrap "></div>
      </main>
    </>
  );
}

export default Expenses;
