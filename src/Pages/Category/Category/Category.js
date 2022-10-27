import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const courses = useLoaderData();

  return (
    <div>
      <img src={courses.image_url} alt="image" />
      <p>{courses.details}</p>
      <p>{courses.author.name}</p>
    </div>
  );
};

export default Category;
