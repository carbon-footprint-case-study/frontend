import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Calculator from "./Calculator";
import { useState } from "react";
import InputComponent from "./InputComponent";

function InputCard(props) {
  const [value, setValue] = useState(0);

  const icon = props.icon;
  const title = props.title;
  const units = props.units;
  const handler = props.handler;
  const data = props.data
 




  const [unit, setUnit] = useState(units[0]);
 

  let [inputList, setInputList] = useState([1])

  const getData = (ele) => {
    let v = ele.target.value
    if(isNaN(v) | v < 0){
      return false
    }
    if(title === "Electricity" | title === "LPG" | title == "Water Usage"){
      handler(title , v)
    }
    setValue(v);
    return true
    
    
  };

  const addInputComponent = () => {
    let newInputList = [...inputList];
    let count = newInputList.length
    newInputList.push(count + 1);
    setInputList(newInputList);
  }

  const removeInputComponent = () => {
    let newInputList = [...inputList];
    newInputList.pop()
    setInputList(newInputList);
  }


  let addBtn 
  let removeBtn
  if(title  === "Private Vehicle") {
    addBtn = <button className="btn btn-primary" onClick={(e) => {addInputComponent()}}><p>+ Add</p></button>
    removeBtn = <button className="btn btn-danger" onClick={(e) => {removeInputComponent()}}><p>X</p></button>
  }

  return (
    <div className="my-4 mx-4 justify-content-center">
      <Card className="shadow-sm">
        <Card.Header>
          <h4>
            {icon} {title}
          </h4>
          <p>{addBtn} {removeBtn}</p>
        </Card.Header>
        {/* <ListGroup variant="flush">
          <ListGroup.Item>
            <InputGroup className="mb-3 my-3">
              <Form.Control
                aria-label="Text input with dropdown button"
                type="number"
                onChange={getData}
                value = {value}
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
            <Calculator title={title} unit={unit} value = {value} handler = {handler}
            />
          </ListGroup.Item>
        </ListGroup> */}
        {inputList.map((curr) => {
          return <>{<InputComponent title = {title} units = {props.units} handler = {handler}/>}</>
        })}
      </Card>
    </div>
  );
}

export default InputCard;
