import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import userImg from "../../assets/images/userImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Creditors() {
  const search = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar userName={"علي شومان"} userImg={userImg} />
      <SideBar />

      <div className="fixed  top-bar bg-greyBar h-14 py-2 w-3/4  rounded-lg flex items-center  justify-end font-bold top-28  right-44 text-white ">
        <form onSubmit={search}>
          <button
            type="submit"
            className="bg-secondary mr-4 py-2 px-2   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-24   "
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            بحث
          </button>

          <input
            type="date"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
          />

          <input
            type="number"
            className="bg-secondary mr-4 py-2 px-2   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="رقم الهاتف"
          />
          <input
            type="text"
            className="bg-secondary mr-4 py-2 px-2  text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	 outline-none w-40  text-white placeholder:text-white text-right "
            placeholder="الاسم"
          />
        </form>
      </div>

      <main className="fixed   w-[80%] h-2/3 flex flex-col items-end  overflow-y-auto overflow-x-hidden    top-44  right-44 text-white font-bold"></main>
    </>
  );
}

export default Creditors;
