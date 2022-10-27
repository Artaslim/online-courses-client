import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Item = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h4>All Courses:{courses.length}</h4>
      <div>
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/category/${course.id}`}>
              <Button variant="info">{course.name}</Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Item;
