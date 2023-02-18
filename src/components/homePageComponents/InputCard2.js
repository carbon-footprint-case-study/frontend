import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Calculator from "./Calculator";

class InputCard2 extends Component {
  constructor(props) {
    super(props);

    this.icon = props.icon;
    this.title = props.title;
    this.units = props.units;
    this.state = {
      unit: this.units[0],
      value: 0,
    };
  }
  unitHandler = (c) => {
    this.setState({
      unit: c,
    });
  };

  getData = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  render() {
    return (
      <div className="my-4 mx-4 justify-content-center">
        <Card className="shadow-sm">
          <Card.Header>
            <h4>
              <span>
                {this.icon} {this.title}
              </span>
            </h4>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <InputGroup className="mb-3 my-3">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  type="Number"
                  defaultValue={this.state.value}
                  onChange={this.getData}
                  min="0"
                  onKeyDown={this.preventMinus}
                />
                <Dropdown as={ButtonGroup}>
                  <Button variant="primary">{this.state.unit}</Button>

                  <Dropdown.Toggle
                    split
                    variant="primary"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    {this.units.map((currElement) => {
                      return (
                        <Dropdown.Item
                          key={currElement}
                          onClick={() => this.unitHandler(currElement)}
                        >
                          {currElement}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
              <Calculator
                title={this.title}
                unit={this.state.unit}
                value={this.state.value}
              />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default InputCard2;
