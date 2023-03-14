import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import userImg from "../../assets/images/userImg.png";
import Category from "../../components/Category/Category";
import {
  faCamera,
  faLaptop,
  faPhone,
  faPlug,
  faSatellite,
  faSatelliteDish,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Stock() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44 flex flex-col items-end">
        <div className="top-bar bg-greyBar h-14 py-2 w-5/6  rounded-lg flex items-center  justify-end font-bold  mb-3 text-white">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg cursor-not-allowed opacity-30    ">
            اضافه منتج
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            اضافه صنف
          </button>
        </div>

        <div className="flex justify-end  gap-4 flex-wrap ">
          <Category title={"كهرباء"} products={14} pieces={240} icon={faPlug} />
          <Category title={"هواتف"} products={64} pieces={540} icon={faPhone} />
          <Category
            title={"ستالايت"}
            products={10}
            pieces={162}
            icon={faSatelliteDish}
          />
          <Category
            title={"مراقبه"}
            products={36}
            pieces={652}
            icon={faCamera}
          />
          <Category
            title={"كمبيوتر"}
            products={32}
            pieces={236}
            icon={faLaptop}
          />
        </div>
      </main>
    </>
  );
}

export default Stock;
