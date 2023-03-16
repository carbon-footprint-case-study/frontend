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
  const handler = props.handler
  const [unit, setUnit] = useState(units[0]);
  const [fuel, setFuel] = useState(fuels[0]);
  
  
  
  
  const getMilageData = (ele) => {
    setMilageValue(ele.target.value);
  };


  const getData = (ele) => {
    let v = ele.target.value
    if(isNaN(v) | v < 0){
      return false
    }
    if (title === "LPG") {
      if (unit === "cylinder/month") v = v * 45.8422;
      else v = v * 1.649;
  
  } 
  else if (title === "Electricity") {
      if (unit === "Rs./month") v = v;
      else v = 0.475*v
  
  } 
  else if (title === "Water Usage") {
      if (unit === "Rs./month") v = v;
      else v = 0.00001*v;
    }
    
  else if(title === "Private Vehicle" | title == "Public Transport") {
      if (unit === "litre/month") {
        switch (fuel) {
          case "Diesel":
            v = 2.2458*v
            break;
          case "Petrol":
            v = 1.9313*v
            break;
          case "CNG":
            v = 0.0019*v
            break;
          default:
            break;
        }
      }
      else {
        switch (fuel) {
          case "Diesel":
            v = 2.2458*v/milageValue
            break;
          case "Petrol":
            v = 1.9313*v/milageValue
            break;
          case "CNG":
            v = 0.0019*v/milageValue
            break;
          default:
            break;
        }
      }
  
    }

    handler(title , v)
    
    setValue(v);
    return true
    
    
  };

  let fuelDrop
  let milage
  if(title === "Private Vehicle" | title === "Public Transport") {
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
            Your Carbon emission is {value} kg/month from {props.title}    
          </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default InputComponent