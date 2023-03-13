import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import userImg from "../../assets/images/userImg.png";
import Category from "../../components/Category/Category";
import { faPlug, faTrash } from "@fortawesome/free-solid-svg-icons";

function Stock() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44">
        <div className="flex justify-start   gap-5 flex-wrap ">
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
        </div>
      </main>
    </>
  );
}

export default Stock;
