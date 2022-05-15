import React from "react";
import { Form } from "react-bootstrap";

const DropdownComponent = ({ optionValues, setSelectedBank }) => {
  const handleBankSelect = (e) => {
    console.log(e.target.value);
    const selectedBankId = e.target.value;
    setSelectedBank(selectedBankId);
  };

  return (
    <Form.Group className="mb-3" controlId="formSelect">
      <Form.Label>Select Bank</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={handleBankSelect}
      >
        <option>Open this select menu</option>
        {optionValues.map((optionValue) => {
          return (
            <option value={optionValue.bank_id} key={optionValue.bank_id}>
              {optionValue.bank_name}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default DropdownComponent;
