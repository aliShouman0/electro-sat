import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PopUp({ selling, children }) {
  return (
    <>
      <div className="absolute z-20 top-0 left-0 h-screen w-screen bg-gray-600 opacity-80"></div>
      <div className=" z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 h-1/2 rounded-lg">
        <div
          className=" absolute z-30 cursor-pointer mt-3 ml-3"
          onClick={() => selling(false)}
        >
          <FontAwesomeIcon
            onClick={() => selling(false)}
            icon={faX}
            size="xl"
            className="text-secondary"
          />
        </div>
        {children}
      </div>
    </>
  );
}

export default PopUp;
