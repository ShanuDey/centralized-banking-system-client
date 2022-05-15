import React from "react";
import Layout from "./Layout";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <Card className="text-center">
          <Card.Header>CBS</Card.Header>
          <Card.Body>
            <Card.Title>Centralized Banking System</Card.Title>
            <Card.Text>For you all banking related service</Card.Text>
            <Link to="/login">
              <Button variant="primary">Start Banking</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">Secured</Card.Footer>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
