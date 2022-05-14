import React from "react";
import Layout from "./Layout";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const SignUp = () => {
  return (
    <Layout>
      <div className="container">
        <Card className="m-5">
          <Card.Header className="text-center">Registration</Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMiddleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control type="email" placeholder="Middle Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="email" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control placeholder="Contact" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default SignUp;
