import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Card, Button, Table } from "react-bootstrap";

const Token = ({ token }) => {
  const componentRef = useRef();

  return (
    <Card className="text-center mb-5">
      <Card.Header>Token</Card.Header>
      <Card.Body ref={componentRef}>
        <Card.Title>Centralized Banking System</Card.Title>
        <Card.Text>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Token ID</td>
                <td>{token.token_id}</td>
              </tr>
              <tr>
                <td>Token Creation Date</td>
                <td>{token.token_creation_date}</td>
              </tr>
              <tr>
                <td>Bank ID</td>
                <td>{token.token_bank_id}</td>
              </tr>
              <tr>
                <td>Branch ID</td>
                <td>{token.token_branch_id}</td>
              </tr>
              <tr>
                <td>User ID</td>
                <td>{token.token_user_id}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted">
        <ReactToPrint
          trigger={() => <Button variant="outline-danger">Print Token</Button>}
          content={() => componentRef.current}
        />
      </Card.Footer>
    </Card>
  );
};

export default Token;
