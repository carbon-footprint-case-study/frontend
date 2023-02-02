import React from 'react'
import TabBar from './TabBar';
import Calculator from './Calculator';
import Carousels from './Carousels'
import { Slider , } from '@mui/material';
import CustomizedSlider from '../RangeSlider';
import RangeSlider from '../RangeSlider';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];


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