import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import { Card, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (userContext.authToken !== "") {
      toast.info("Already logged in");
      navigate("/dashboard", { replace: true });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://raw.githubusercontent.com/ShanuDey/centralized-banking-system-client/test/dummy_api_data/login_response.json", {
      // method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(function (response) {
        console.log(response);
        toast.success("Login Successfully");
        userContext.setAuthToken(response.body.auth_token);
        navigate("/dashboard", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("login failed");
      });
  };

  return (
    <Layout>
      <div className="container">
        <Card className="m-5">
          <Card.Header className="text-center">Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
          <div className="text-center mb-3">
            or
            <br />
            <Link to="/signup">Create an account</Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
