import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import userImg from "../../assets/images/userImg.png";


function Category() {
  const { title } = useParams();

  return (
    <>
      Category {title}
      <div>
        <NavBar userName={"علي شومان"} userImg={userImg} />
        <SideBar />
      </div>
    </>
  );
}

export default Category;
