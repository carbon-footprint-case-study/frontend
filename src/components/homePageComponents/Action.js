import React from 'react'

function Action(props) {
   const totalData = props.totalData
   const homeData = props.homeData
   const travelData = props.travelData
   const foodData = props.foodData
   
   let mx = Math.max(totalData[0] , Math.max(totalData[1] , totalData[2]))
   let heading
   let content
   if(mx == totalData[0]){
     heading = <h1>Maximum emission due to Hosehold</h1>

     
   }
   else if(mx == totalData[1]){
     heading = <h1>Maximum emission die to Travel</h1>
   }
   else{
    heading = <h1>Maximum emission due to Food</h1>
   }
   if(homeData[0] > 124.2852){
       content = <div><h2>You are not using electricity efficiently</h2>
       <p>Here are some sugession for reducing your carbon footprint due to electricity</p>
       </div>
   }




   

  return (
    <>
    {heading}
    {content}
    </>
  )
}

export default Action