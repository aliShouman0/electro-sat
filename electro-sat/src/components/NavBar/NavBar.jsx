import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/images/transparent-logo.png";

function NavBar({ userName, userImg }) {
  const [time, setTime] = useState(Date.now());
  const requestRef = useRef();
  const animate = (timestamp) => {
    setTime(Date.now());
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const formattedTime = new Date(time).toLocaleTimeString();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  const options = { weekday: "long" };
  const today = new Date();
  const dayOfWeekString = today.toLocaleString("ar", options);

  return (
    <div className="w-screen bg-primary h-24 fixed top-0 left-0  flex items-center  justify-between ">
      <div className="userName ml-4 flex  items-center justify-center text-white">

        <div className="userInfo mr-4 text-center">
          <p className="text-xs mb-2">{userName}</p>
          <p className="text-xs mb-2">
            {dayOfWeekString} {currentDate}
          </p>
          <p className="text-xs">
            {formattedTime} 
          </p>
        </div>

        <div className="userImage h-12  w-12">
          <img src={userImg} alt="userImg" lassName="h-full w-full" />
        </div>
      </div>

      <div className="logo h-20  w-28     mr-4  ">
        <img src={logo} alt="logo" className="h-full w-full" />
      </div>
    </div>
  );
}

export default NavBar;
