import React from 'react'
import BarGraph from './BarGraph'
import StackedBarGraph from './StackedBar'



function Shopping(props) {
  const homeData = props.homeData
  const travelData = props.travelData
  return (
    <div>
      <StackedBarGraph homeData = {homeData} travelData = {travelData}/>
    </div>
  )
}

export default Shopping