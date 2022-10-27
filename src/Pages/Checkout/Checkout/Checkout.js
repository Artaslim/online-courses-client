import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checks = useLoaderData();
  const { author, title } = checks;
  console.log(checks);

  return (
    <div>
      <h2 className="text-center">Checkout</h2>
      <div className="d-flex justify-content-center align-items-center border border-2 border-info p-4">
        <h4 className="me-5">Course-Outline: {title}</h4>
        <h4>Price: {author.price}</h4>
      </div>
    </div>
  );
};

export default Checkout;
