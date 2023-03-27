import React, { useEffect } from 'react'
import BarGraph from './BarGraph'

function FootPrint(props) {
  const data = props.data 
  const labels = props.labels
  console.log(`footprintdata ${data}`)

  return (
    <BarGraph data = {data} labels = {labels}/>
  )
}

export default FootPrint