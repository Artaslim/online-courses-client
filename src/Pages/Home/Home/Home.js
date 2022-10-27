import React from "react";
import { useLoaderData } from "react-router-dom";
import CardDetails from "../../Shared/CardDetails/CardDetails";

const Home = () => {
  const allCourses = useLoaderData();

  return (
    <div className="d-flex row   row-lg-2  bd-highlight mb-3">
      <h2>this is home:{allCourses.length}</h2>
      {allCourses.map((courses) => (
        <CardDetails key={courses._id} courses={courses}></CardDetails>
      ))}
    </div>
  );
};

export default Home;
