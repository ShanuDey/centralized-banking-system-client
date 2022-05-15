import React from "react";
import { Form } from "react-bootstrap";

const Branch = ({ optionValues, setSelectedBranch }) => {
  const handleBranchSelect = (e) => {
    console.log(e.target.value);
    const selectedBranchId = e.target.value;
    setSelectedBranch(selectedBranchId);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formSelect">
        <Form.Label>Select Branch</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleBranchSelect}
        >
          <option>Open this select menu</option>
          {optionValues.map((optionValue) => {
            return (
              <option value={optionValue.branch_id} key={optionValue.branch_id}>
                {optionValue.branch_name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default Branch;
