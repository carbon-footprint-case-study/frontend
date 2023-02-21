import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Calculator from "./Calculator";

function InputComponent(props) {
    const [value, setValue] = useState(0);
    const [milageValue, setMilageValue] = useState(0);

  const title = props.title;
  const units = props.units;
  const fuels = ["Petrol","Diesel","CNG"]

  const [unit, setUnit] = useState(units[0]);
  const [fuel, setFuel] = useState(fuels[0])

  const getData = (ele) => {
    setValue(ele.target.value);
  };
  const getMilageData = (ele) => {
    setMilageValue(ele.target.value);
  };

  let fuelDrop
  let milage
  if(title === "Private Vehicle") {
    if(unit === "km/month")
    milage = <Form.Control
    aria-label="Text input with dropdown button"
    type="number"
    onChange={getMilageData}
    placeholder="Enter Milage"
  />
    fuelDrop = <select
    className="dropdown"
    onChange={(e) => setFuel(e.target.value)}
  >
    {fuels.map((currElement) => {
      return <option key={currElement}>{currElement}</option>;
    })}
  </select>
  }

  let plHolder = `Enter ${title} usage in ${unit}`

  return (
    <div>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <InputGroup className="mb-3 my-3">
              {fuelDrop}
              {milage}
              <Form.Control
                aria-label="Text input with dropdown button"
                type="number"
                placeholder={plHolder}
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
            <Calculator title={title} unit={unit} value={value} fuel={fuel} milageValue={milageValue}/>
          </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default InputComponent