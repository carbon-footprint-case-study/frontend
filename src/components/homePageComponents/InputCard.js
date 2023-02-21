import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import InputComponent from "./InputComponent";

function InputCard(props) {
  const icon = props.icon;
  const title = props.title;
  const units = props.units;
  const handler = props.handler;
  const data = props.data
  
  let [inputList, setInputList] = useState([1])

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

  const getData = (ele) => {
    let v = ele.target.value
    if(isNaN(v) | v < 0){
      return false
    }
    handler(title , v)
    setValue(v);
    return true
    
    
  };


  return (
    <div className="my-4 mx-4 justify-content-center">
      <Card className="shadow-sm">
        <Card.Header>
          <h4>
            {icon} {title}
          </h4>
         <p>{addBtn} {removeBtn}</p>
        </Card.Header>

        {inputList.map((curr) => {
          return <>{<InputComponent title = {title} units = {props.units}/>}</>
        })}

        <ListGroup variant="flush">
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
            <Calculator title={title} unit={unit} data = {data} handler = {handler}  
            />
          </ListGroup.Item>
        </ListGroup>

      </Card>
    </div>
  );
}

export default InputCard;
