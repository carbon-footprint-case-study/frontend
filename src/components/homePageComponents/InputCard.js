import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function InputCard(props) {
  const title = props.title;
  const units = props.units;
  const value = props.value;

  return (
    <div className="my-4 mx-4 justify-content-center">
      <Card className="shadow-sm">
        <Card.Header>
          <h4>{title}</h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <InputGroup className="mb-3 my-3">
              <Form.Control
                aria-label="Text input with dropdown button"
                type="number"
                value={value}
              />
              <DropdownButton
                variant="outline-secondary"
                title="Units"
                id="input-group-dropdown-2"
                align="end"
              >
                {units.map((currElement) => {
                  return <Dropdown.Item href="#">{currElement}</Dropdown.Item>;
                })}
              </DropdownButton>
            </InputGroup>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default InputCard;