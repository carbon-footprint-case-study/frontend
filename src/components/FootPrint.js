import React from 'react'
import BarGraph from './BarGraph'
import { useState , useEffect} from 'react'

function FootPrint(props) {

  const homeData = props.homeData
  const travelData = props.travelData
  const homeLabels = props.homeLabels
  const travelLabels = props.travelLabels
  const units = ['Home' , 'Travel' , 'Total']
  const [unit, setUnit] = useState(units[0]);
  const [data ,  setData] = useState(homeData)
  const [labels , setLabels] = useState(homeLabels)
  const [totalData , setTotalData] = useState([0 , 0])


  useEffect(() => {
    const homeSum = homeData.reduce((acc, curr) => acc + curr, 0);
    const travelSum = travelData.reduce((acc, curr) => acc + curr, 0);
    setTotalData([homeSum, travelSum]);
  }, [homeData, travelData]);


  const unitHandler = (ele) => {
    let curr = ele.target.value
    if(curr == 'Home'){
      setData(homeData)
      setLabels(homeLabels)
    }
    else if(curr == 'Travel'){
      setData(travelData)
      setLabels(travelLabels)
    }
    else{
      setData(totalData)
      setLabels(['Home' , 'Travel'])
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