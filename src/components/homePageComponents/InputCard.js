import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Calculator from "./Calculator";
import { useState } from "react";

function InputCard(props) {
  const [value, setValue] = useState(0);

  const icon = props.icon;
  const title = props.title;
  const units = props.units;

  const [unit, setUnit] = useState(units[0]);

  const getData = (ele) => {
    setValue(ele.target.value);
  };

  return (
    <div className="my-4 mx-4 justify-content-center">
      <Card className="shadow-sm">
        <Card.Header>
          <h4>
            {icon} {title}
          </h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <InputGroup className="mb-3 my-3">
              <Form.Control
                aria-label="Text input with dropdown button"
                type="number"
                onChange={getData}
              />
              <select
                className="dropdown"
                onChange={(e) => setUnit(e.target.value)}
              >
                {units.map((currElement) => {
                  return <option key={currElement}>{currElement}</option>;
                })}
              </select>
            </InputGroup>
            <Calculator title={title} unit={unit} value={value} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default InputCard;
