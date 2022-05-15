import React, { useEffect, useState } from "react";
import Bank from "./Bank";
import Layout from "./Layout";
import { Card, Button } from "react-bootstrap";
import Branch from "./Branch";
import { toast } from "react-toastify";
import Token from "./Token";

const Dashboard = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [token, setToken] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await toast.promise(
        fetch("http://localhost:8000/banks"),
        {
          pending: "Fetching Bank Details",
          success: "Bank Details received 👌",
          error: "Failed to load Bank Details 🤯",
        }
      );
      console.log(response);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        setBanks(result);
      }
    };
    fetchData().catch(console.error);
  }, []);

  const fetchBranchDetails = () => {
    const fetchData = async () => {
      const response = await toast.promise(
        fetch("http://localhost:8000/branches", {
          method: "GET",
        }),
        {
          pending: "Fetching Branch Details",
          success: "Branch Details received 👌",
          error: "Failed to load Branch Details 🤯",
        }
      );
      console.log(response);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        setBranches(result);
      }
    };
    fetchData().catch(console.error);
  };

  const hanldeBankSelect = (bank_id) => {
    setSelectedBank(bank_id);
    fetchBranchDetails();
  };

  const handleTokenGeneration = () => {
    const fetchData = async () => {
      const response = await toast.promise(
        fetch("http://localhost:8000/token", {
          method: "GET",
        }),
        {
          pending: "Fetching Token Details",
          success: "Token Details received 👌",
          error: "Failed to load Token Details 🤯",
        }
      );
      console.log(response);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        setToken(result);
      }
    };
    fetchData().catch(console.error);
  };

  const isTokenReceived = () => {
    return Object.keys(token).length !== 0;
  };

  return (
    <Layout>
      <Card className="text-center mb-5">
        <Card.Header>CBS</Card.Header>
        <Card.Body>
          <Card.Title>Bank Management</Card.Title>
          <Bank optionValues={banks} setSelectedBank={hanldeBankSelect} />
          {selectedBank !== "" && (
            <Branch
              optionValues={branches}
              setSelectedBranch={setSelectedBranch}
            />
          )}
          {selectedBranch !== "" && (
            <Button variant="outline-primary" onClick={handleTokenGeneration}>
              Generate Token
            </Button>
          )}
        </Card.Body>
      </Card>

      {isTokenReceived() && <Token token={token} />}
    </Layout>
  );
};

export default Dashboard;
