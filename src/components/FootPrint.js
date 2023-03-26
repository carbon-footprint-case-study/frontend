import React from 'react'
import BarGraph from './BarGraph'
import { useState } from 'react'

function FootPrint(props) {

  const homeData = props.homeData
  const travelData = props.travelData
  const homeLabels = props.homeLabels
  const travelLabels = props.travelLabels
  const units = ['Home' , 'Travel']
  const [unit, setUnit] = useState(units[0]);
  const [data ,  setData] = useState(homeData)
  const [labels , setLabels] = useState(homeLabels)

  console.log(data)
  console.log(labels)

  const unitHandler = (ele) => {
    let curr = ele.target.value
    if(curr == 'Home'){
      setData(homeData)
      setLabels(homeLabels)
    }
    else{
      setData(travelData)
      setLabels(travelLabels)
    }
    setUnit(ele.target.value)
  }
  return (
    <>
    <select
    className="dropdown"
    onChange={unitHandler}
  >
    {units.map((currElement) => {
      return <option key={currElement}>{currElement}</option>;
    })}
  </select>
    <BarGraph data = {data} labels = {labels} key = {String(data)}/>
    </>
  )
}

export default FootPrint