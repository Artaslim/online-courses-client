import React from "react";
import { useLoaderData } from "react-router-dom";
import CardDetails from "../../Shared/CardDetails/CardDetails";

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    // <div style={{ width: "450px" }}>
    //   <img src={courses.image_url} alt="image" />
    //   <li>{courses.details}</li>
    //   <p>{courses.author.name}</p>
    // </div>
    // <div>
    <div className="p-3">
      <CardDetails key={courses._id} courses={courses}></CardDetails>
    </div>
  );
};

export default Category;
