import React from "react";
import Layout from "./Layout";
import { Card, Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Layout>
      <div className="container">
        <Card className="m-5">
          <Card.Header className="text-center">Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
