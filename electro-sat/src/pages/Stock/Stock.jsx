import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import userImg from "../../assets/images/userImg.png";
import Category from "../../components/Category/Category";
import { faCamera, faLaptop, faPhone, faPlug, faSatellite, faSatelliteDish, faTrash } from "@fortawesome/free-solid-svg-icons";

function Stock() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44">
        <div className="flex justify-start   gap-4 flex-wrap ">
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"هواتف"} products={64} pieces={540} icon={faPhone} />
          <Category title={"ستالايت"} products={10} pieces={162} icon={faSatelliteDish} />
          <Category title={"مراقبه"} products={36} pieces={652} icon={faCamera} />
          <Category title={"كمبيوتر"} products={32} pieces={236} icon={faLaptop} />
        </div>
      </main>
    </>
  );
}

export default Stock;
