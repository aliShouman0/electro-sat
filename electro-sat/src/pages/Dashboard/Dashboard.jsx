import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import userImg from "../../assets/images/userImg.png";
import SideBar from "../../components/SideBar/SideBar";

function Dashboard() {
  return (
    <> 
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
    </>
  );
}

export default Dashboard;
