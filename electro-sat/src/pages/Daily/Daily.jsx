import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import userImg from "../../assets/images/userImg.png";
import SideBar from "../../components/SideBar/SideBar";

function Daily() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  top-28 w-5/6 flex  justify-center  right-40   overflow-y-auto  ">
        <div className="top-bar bg-greyBar h-14  py-1 w-3/4 rounded-lg flex items-center justify-end font-bold">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            صرف
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            دفع دائن
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            مبيع
          </button>
        </div>
      </main>
    </>
  );
}

export default Daily;
