import React from "react";
import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/SideBar/SideBar"
import userImg from "../assets/images/userImg.png"


function Layout({children}) {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      {children}
    </>
  );
}

export default Layout;
