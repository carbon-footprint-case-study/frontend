


import React, { useState, useEffect } from 'react'

import BarGraph from './BarGraph'
import StackedBarGraph from './StackedBar'

function FootPrint(props) {

  const homeData =  props.homeData
  const travelData =  props.travelData

  const homeLabels = props.homeLabels
  const travelLabels = props.travelLabels
  const totalData = props.totalData
  const units = ['Home', 'Travel', 'Total']





  const [unit, setUnit] = useState(units[0])
  const [data, setData] = useState(homeData)
  const [labels, setLabels] = useState(homeLabels)




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
      {unit === 'Total' ? (
        <StackedBarGraph homeData = {homeData} travelData = {travelData} />
      ) : (
        <BarGraph data={data} labels={labels} key={String(data)} />
      )}
    </>
  )
}

export default FootPrint

