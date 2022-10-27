import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const categories = useLoaderData();
  const { _id, title, image_url, details } = categories;

  return (
    <Card className="border border-2 border-info " style={{ width: "450px" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div className="d-flex ">
          <Button className="me-4" variant="primary">
            Go somewhere
          </Button>
          <Link to={`/checkout/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Courses;
