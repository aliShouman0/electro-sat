import React from "react";

function InfoBox({
  title,
  oldTotalUSD,
  todayTotalUDS,
  oldTotalLira,
  todayTotalLira,
}) {
  return (
    <div className="bg-secondary w-52 h-36 rounded-lg text-center p-1 m-1">
      <div className="title">
        <p className="font-bold ">{title}</p>
      </div>
      <div className="info relative my-2">
        <p>
          {oldTotalLira} L.L + {oldTotalUSD}$
        </p>

        <p className="font-extrabold text-xl absolute left-4 top-2">+</p>
        <p>
          {todayTotalLira} L.L + {todayTotalUDS}$
        </p>
        <hr className=" mx-auto my-2  w-3/4 " />
        <p className="font-bold">
          {oldTotalLira + todayTotalLira} L.L + {oldTotalUSD + todayTotalUDS}$
        </p>
      </div>
    </div>
  );
}

export default InfoBox;
