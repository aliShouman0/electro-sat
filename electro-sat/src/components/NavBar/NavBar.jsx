import React from "react";
import logo from "../../assets/images/transparent-logo.png";

function NavBar({ userName }) {
  return (
    <div className="w-screen bg-primary h-24 fixed top-0 left-0  flex items-center  ">
      <div className="logo h-3/4 w-1/6  ml-auto mr-4  ">
        <img src={logo} alt="logo" className="h-full w-full" />
      </div>
    </div>
  );
}

export default NavBar;
