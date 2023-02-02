import React from 'react'
import TabBar from './TabBar';
import Calculator from './Calculator';
import Carousels from './Carousels'


function HomePage() {
  return (
    <div>
        <Carousels/>
        <h1 className='mx-5 my-5'>CARBON FOOTPRINT CALCULATOR</h1>
        <TabBar/>
    </div>
  )
}

export default HomePage