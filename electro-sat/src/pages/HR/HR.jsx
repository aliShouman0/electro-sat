import {
  faCircleExclamation,
  faDiagnoses,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function HR() {
  const [superAdmin, setSuperAdmin] = useState(false);
  return (
    <>
      {" "}
      <main className="fixed  w-[80%] h-full overflow-y-auto overflow-x-hidden    top-28  right-44 flex flex-col items-end">
        <div className="top-bar bg-greyBar h-14 py-2 w-5/6  rounded-lg flex items-center  justify-end font-bold  mb-3 text-white">
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            الموردون
          </button>
          <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
            العملاء
          </button>
          {superAdmin && (
            <button className="bg-secondary mr-4 py-2 px-6   text-xs  rounded-lg hover:opacity-60 hover:font-semibold hover:text-sm transition-all	    ">
              المستخدمين
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="lg"
                className="ml-2"
              />
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default HR;
