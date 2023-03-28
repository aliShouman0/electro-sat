import React from "react";

function InfoBox({
  title,
  oldTotalUSD,
  todayTotalUDS,
  oldTotalLira,
  todayTotalLira,
  daily,
  data,
}) {
  return (
    <div className="bg-secondary w-52 h-36 rounded-lg text-center p-1 m-1">
      <div className="title">
        <p className="font-bold ">{title}</p>
      </div>
      <div className="info relative my-2">
        {!daily && (
          <p>
            {oldTotalLira} L.L + {oldTotalUSD}$
          </p>
        )}
        {daily && <p>{data[1]} L.L</p>}
        <p className="font-extrabold text-xl absolute left-4 top-2">+</p>

        {!daily && (
          <p>
            {todayTotalLira} L.L + {todayTotalUDS}$
          </p>
        )}
        {daily && <p>{data[0]} $</p>}

        <hr className=" mx-auto my-2  w-3/4 " />
        {!daily && (
          <p className="font-bold">
            {oldTotalLira + todayTotalLira} L.L + {oldTotalUSD + todayTotalUDS}$
          </p>
        )}

        {daily && (
          <p className="font-bold">
            {data[1]} L.L // {data[0]}$
          </p>
        )}
      </div>
    </div>
  );
}

export default InfoBox;
