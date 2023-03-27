// import React from 'react'
// import BarGraph from './BarGraph'
// import { useState , useEffect} from 'react'

// function FootPrint(props) {

//   const homeData = props.homeData
//   const travelData = props.travelData
//   const homeLabels = props.homeLabels
//   const travelLabels = props.travelLabels
//   const units = ['Home' , 'Travel' , 'Total']
//   // const [unit, setUnit] = useState(units[0]);
//   // const [data ,  setData] = useState(homeData)
//   // const [labels , setLabels] = useState(homeLabels)
//   // const [totalData , setTotalData] = useState([0 , 0])

//   const [totalData, setTotalData] = useState([
//     homeData.reduce((a, b) => a + b, 0),
//     travelData.reduce((a, b) => a + b, 0),
//   ])
//   const [unit, setUnit] = useState(units[0])
//   const [data, setData] = useState(homeData)
//   const [labels, setLabels] = useState(homeLabels)

  


//   const unitHandler = (ele) => {
//     let curr = ele.target.value
//     if(curr == 'Home'){
//       setData(homeData)
//       setLabels(homeLabels)
//     }
//     else if(curr == 'Travel'){
//       setData(travelData)
//       setLabels(travelLabels)
//     }
//     else{
   
//       setData(totalData)
//       setLabels(['Home' , 'Travel'])
//     }
//     setUnit(ele.target.value)
//   }
//   return (
//     <>
//     <select
//     className="dropdown"
//     onChange={unitHandler}
//   >
//     {units.map((currElement) => {
//       return <option key={currElement}>{currElement}</option>;
//     })}
//   </select>
//     <BarGraph data = {data} labels = {labels} key = {String(data)}/>
//     </>
//   )
// }

// export default FootPrint

import React, { useState, useEffect } from 'react'
import BarGraph from './BarGraph'

function FootPrint(props) {
  const homeData = JSON.parse(localStorage.getItem('homeData')) || props.homeData
  const travelData = JSON.parse(localStorage.getItem('travelData')) || props.travelData
  const homeLabels = props.homeLabels
  const travelLabels = props.travelLabels
  const units = ['Home', 'Travel', 'Total']

  const [totalData, setTotalData] = useState([
    homeData.reduce((a, b) => a + b, 0),
    travelData.reduce((a, b) => a + b, 0),
  ])
  const [unit, setUnit] = useState(units[0])
  const [data, setData] = useState(homeData)
  const [labels, setLabels] = useState(homeLabels)

  useEffect(() => {
    localStorage.setItem('homeData', JSON.stringify(homeData))
    localStorage.setItem('travelData', JSON.stringify(travelData))
  }, [homeData, travelData])

  const unitHandler = (ele) => {
    let curr = ele.target.value
    if (curr === 'Home') {
      setData(homeData)
      setLabels(homeLabels)
    } else if (curr === 'Travel') {
      setData(travelData)
      setLabels(travelLabels)
    } else {
      setData(totalData)
      setLabels(['Home', 'Travel'])
    }
    setUnit(curr)
  }

  return (
    <>
      <select className="dropdown" onChange={unitHandler}>
        {units.map((currElement) => {
          return (
            <option key={currElement} value={currElement}>
              {currElement}
            </option>
          )
        })}
      </select>
      <BarGraph data={data} labels={labels} key={String(data)} />
    </>
  )
}

export default FootPrint

