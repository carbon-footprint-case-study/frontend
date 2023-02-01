import React from 'react'
import TabBar from './homePageComponents/TabBar';
import Calculator from './Calculator';
import Carousels from './homePageComponents/Carousels'

function HomePage() {
  return (
    <div>
        <Carousels/>
        <h1 className='mx-5 my-5'>CARBON FOOTPRINT CALCULATOR</h1>
        <TabBar/>
        <Calculator/>
    </div>
  )
}

export default HomePage