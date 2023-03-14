import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { title } = useParams();

  return <div>Category {title}</div>;
}

export default Category;
