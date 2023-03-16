import React from "react";
import { useState } from "react";

function Calculator(props) {
  let val;
  const h = props.h


  
 


  if (props.title === "LPG") {
    if (props.unit === "cylinder/month") val = props.value * 45.8422;
    else val = props.value * 1.649;

} 
else if (props.title === "Electricity") {
    if (props.unit === "Rs./month") val = props.value;

} 
else if (props.title === "Water Usage") {
    if (props.unit === "Rs./month") val = props.value;
    else val = props.value;
  }
  
else if(props.title === "Private Vehicle") {
    if (props.unit === "litre/month") {
      switch (props.fuel) {
        case "Diesel":
          val = 2.2458*props.value
          break;
        case "Petrol":
          val = 1.9313*props.value
          break;
        case "CNG":
          val = 0.0019*props.value
          break;
        default:
          break;
      }
    }
    else {
      switch (props.fuel) {
        case "Diesel":
          val = 2.2458*props.value/props.milageValue
          break;
        case "Petrol":
          val = 1.9313*props.value/props.milageValue
          break;
        case "CNG":
          val = 0.0019*props.value/props.milageValue
          break;
        default:
          break;
      }
    }

  }


  
  
    
  return (
    <div>

    </div>
  );
}


export default Calculator;