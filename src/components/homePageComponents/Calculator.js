import React from "react";
import { useState } from "react";

function Calculator(props) {
  let val;

  
 


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


  return (
    <div>
      Your Carbon emission is {val} kg/month from {props.title}
    </div>
  );
}

export default Calculator;