import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardDetails = ({ courses }) => {
  const { _id, title, image_url } = courses;
  console.log(courses);
  return (
    <Card className="border me-4 mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Link to={`/courses/${_id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
