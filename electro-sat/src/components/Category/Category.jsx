import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

function Category({ id, icon, title, products, pieces }) {
  const [editName, setEditName] = useState(false);
  const titleRef = useRef(title);

  return (
    <div className="bg-secondary h-52 w-48 p-5 relative rounded-xl cursor-pointer hover:opacity-70 transition-all ease-in-out">
      <div className="del absolute top-2 left-2">
        <FontAwesomeIcon icon={faTrash} color="white" />
      </div>
      <div className="img text-center">
        <FontAwesomeIcon icon={icon} color="white" size="3x" />
      </div>
      <div className="description mt-4 text-white flex  flex-col items-end font-bold ">
        <div className="title mb-2 flex items-center justify-center w-full ">
          {editName ? (
            <input
              type="text"
              className="outline-none border-n bg-transparent w-20 "
              ref={titleRef}
              defaultValue={title}
              onBlur={() => {
                setEditName(false);
              }}
            />
          ) : (
            <p className=" text-2xl ">{title}</p>
          )}
          <FontAwesomeIcon
            onClick={() => {
              setEditName(!editName); 
            }}
            icon={faEdit}
            color="white"
          />
        </div>
        <p className="text-lg">
          منتج: <span>{products}</span>
        </p>
        <p className="text-lg">
          مجموع القطع: <span>{pieces}</span>
        </p>
      </div>
    </div>
  );
}

export default Category;
