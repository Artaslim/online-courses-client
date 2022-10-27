import { GoogleAuthProvider } from "@firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);

  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  return (
    <div>
      <h3 className="text-center mb-4 text-primary">Sign In Form</h3>
      <div className="border border-2 border-info p-5">
        <Form onSubmit={handleLogIn} className="mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <p>{error}</p>
        <p>
          Create New Account <Link to="/register">Create a New Account</Link>
        </p>

        <Button onClick={handleGoogle}>Google Sign In</Button>
      </div>
    </div>
  );
};

export default Login;
