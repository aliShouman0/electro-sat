import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function USDInfoBox() {
  return (
    <div className="mx-2 bg-secondary h-24  rounded-lg text-black font-bold text-xs   flex flex-col items-center justify-between     ">
      <div className="flex items-center justify-between w-full mt-2 ">
        <div className="img ml-5">
          <FontAwesomeIcon icon={faDollar} size={"xl"} />
        </div>

        <div className="price mr-5">
          <div className="black-market mb-2">
            <p>82,550 L.L </p>
          </div>
          <div className="sayrafa">
            <p>78,550 L.L </p>
          </div>
        </div>
      </div>

      <button className="btn bg-white w-3/4 rounded-lg mb-2 text-xs py-2 ">
        تعديل
      </button>
    </div>
  );
}

export default USDInfoBox;
