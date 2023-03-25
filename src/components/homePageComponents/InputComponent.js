import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

function InputComponent(props) {

    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);
    const [milageValue, setMilageValue] = useState(1);
    
    const title = props.title;
    const units = props.units;
    const fuels = ["Petrol","Diesel","CNG"]
    const [unit, setUnit] = useState(units[0]);
    const [fuel, setFuel] = useState(fuels[0]);

    const sumHandler = props.sumHandler;

    useEffect(() => {
        const Calculator = (title, unit, fuel, milageValue, v, setResult) => {

          let res = 0
          let prevRes = result
          if (title === "LPG") {
            if (unit === "cylinder/month") res = v * 45.8422;
            else res = v * 1.649;
        
        } 
        else if (title === "Electricity") {
            if (unit === "Rs./month") res = v;
            else res = 0.475*v
        
        } 
        else if (title === "Water Usage") {
            if (unit === "Rs./month") res = v;
            else res = 0.00001*v;
          }
          
        else if(title === "Private Vehicle" | title === "Public Transport") {
            if (unit === "litre/month") {
              switch (fuel) {
                case "Diesel":
                  res = 2.2458*v
                  break;
                case "Petrol":
                  res = 1.9313*v
                  break;
                case "CNG":
                  res = 0.0019*v
                  break;
                default:
                  break;
              }
            }
            else {
              switch (fuel) {
                case "Diesel":
                  res = 2.2458*v/milageValue
                  break;
                case "Petrol":
                  res = 1.9313*v/milageValue
                  break;
                case "CNG":
                  res = 0.0019*v/milageValue
                  break;
                default:
                  break;
              }
            }
          }
          setResult(res);
          sumHandler(res - prevRes);
        };
        Calculator(title, unit, fuel, milageValue, value, setResult);

    },[title, unit, fuel, milageValue, value, result, sumHandler])
  
  const getMilageData = (ele) => {
    setMilageValue(ele.target.value);
  };

  const fuelDropDownhandler = (ele) => {
    setFuel(ele.target.value)
  }
  const unitHandler = (ele) => {
    setUnit(ele.target.value)
  }

  const getData = (ele) => {
    let v = ele.target.value
    if(isNaN(v) | v < 0){
      return false
    }
    setValue(v)
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
    onChange={fuelDropDownhandler}
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
                onChange={unitHandler}
              >
                {units.map((currElement) => {
                  return <option key={currElement}>{currElement}</option>;
                })}
              </select>
            </InputGroup>
            Your Carbon emission is {result} kg/month from {props.title}    
          </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default InputComponent