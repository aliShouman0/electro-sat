import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import userImg from "../../assets/images/userImg.png";
import SideBar from "../../components/SideBar/SideBar";

function Daily() {
  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />
      <main className="fixed  top-28 w-full  flex  flex-col items-center  justify-center  right-24  overflow-y-auto  ">
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
        <div className="sales mt-5 w-full ">
          <div className="title w-1/2 bg-secondary text-center m-auto py-1 rounded-xl">
            <p>المبيعات</p>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Daily;
