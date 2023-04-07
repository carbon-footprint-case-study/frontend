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
  const fuels = ["Petrol", "Diesel", "CNG", "Electric"]
  const BusFuels = ["Diesel" , "CNG" , "Electric"]
  const [unit, setUnit] = useState(units[0]);
  const [fuel, setFuel] = useState(fuels[0]);
  const [busFuel , setBusFuel] = useState(BusFuels[0])
  const [unitOptions, setUnitOptions] = useState(units);
  const [mileage , setMileage] = useState(<></>)


  const sumHandler = props.sumHandler;

  useEffect(() => {
    const Calculator = (title, unit, fuel,busFuel, milageValue, v, setResult ) => {

      let res = 0
      let prevRes = result
      if (title === "LPG") {
        if (unit === "cylinder/month") res = v * 34.7733;
        else res = v * 1.2494;

      }
      else if (title === "Electricity") {
        if (unit === "Rs./month") res = v;
        else res = 0.93 * v

      }
      else if (title === "Water Usage") {
        if (unit === "Rs./month") res = v;
        else res = 0.000422 * v;
      }

      else if (title === "Private Vehicle") {
        if (unit === "litre/month") {
          switch (fuel) {
            case "Diesel":
              res = 2.6972 * v
              break;
            case "Petrol":
              res = 1.9313 * v
              break;
            case "CNG":
              res = 0.0019 * v
              break;
            default:
              break;
          }
        }
        else {
          switch (fuel) {
            case "Diesel":
              res = 2.6972 * v / milageValue
              break;
            case "Petrol":
              res = 1.9313 * v / milageValue
              break;
            case "CNG":
              res = 0.0019 * v / milageValue
              break;
            case "Electric" :
              res = 0.93 * v / milageValue
            default:
              break;
          }
        }
      }
      else if (title === "Bus") {
        switch (busFuel) {
          case "Diesel":
            res = (0.5152 * v) / 40
            break;
          case "CNG":
            res = (0.0019 * v) / (40 * 1.1)
            break;
           
          case "Electric":
            res = 0.015 * v
            break;
          default:
            break;
        }
      }
      else if (title === "Train") {
        res = 0.00794 * v
      }
      else if (title === "Metro") {
        res = 0.0079 * v
      }
      else if (title === "Flight") {
        res = 0.121 * v
      }



      setResult(res);
 
      sumHandler(res - prevRes);
    };
    Calculator(title, unit, fuel,busFuel, milageValue, value, setResult );

  }, [title, unit, fuel,  busFuel , milageValue, value, result ])



  useEffect(() => {
    if(unit === "km/month" && title === "Private Vehicle"){
      setMileage(<Form.Control
        aria-label="Text input with dropdown button"
        type="number"
        placeholder={fuel === "Electric" ? "Enter mileage in km/kwh" : "enter mileage in km/litre"}
        onChange={getMilageData}
      />)
    }
    else{
      setMileage(<></>)
    }
  }, [unit, fuel]);

  const getMilageData = (ele) => {
    setMilageValue(ele.target.value);
  };

  const fuelDropDownhandler = (ele) => {
    const selectedFuel = ele.target.value;
    setFuel(selectedFuel);

    if (selectedFuel === "Electric") {
      setUnitOptions(["km/month"]);
      setUnit("km/month");
      console.log(unit)
    } else {
      setUnitOptions(units);

      
    }
    console.log(unit)




  };
  const busFuelDropDownhandler = (ele) => {
    const selectedFuel = ele.target.value;
    setBusFuel(selectedFuel);


  };

  const unitHandler = (ele) => {
    const selectedUnit = ele.target.value;
    setUnit(selectedUnit);
  
  };
  

  const getData = (ele) => {
    let v = ele.target.value
    if (isNaN(v) | v < 0) {
      return false
    }
    setValue(v)
    return true
  };

  let fuelDrop

  if (title === "Private Vehicle" ) {
    fuelDrop = <select
      className="dropdown"
      onChange={fuelDropDownhandler}
    >
      {fuels.map((currElement) => {
        return <option key={currElement}>{currElement}</option>;
      })}
    </select>
  }
  let bus
  if (title === "Bus") {
    bus = <select
      className="dropdown"
      onChange={busFuelDropDownhandler}
    >
      {BusFuels.map((currElement) => {
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
            {mileage}
            {bus}
            <Form.Control
              aria-label="Text input with dropdown button"
              type="number"
              placeholder={plHolder}
              onChange={getData}
              min = {0}
            />
            <select className="dropdown" onChange={unitHandler}>
              {unitOptions.map((currElement) => {
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