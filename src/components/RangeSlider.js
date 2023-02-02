import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function RangeSlider(props) {
  const marks = props.marks
  return (
    <Box sx={{ width: 300 }}>
    <Slider
      aria-label="Always visible"
      marks={marks}
      valueLabelDisplay="on"
    />
  </Box>
  )
}

export default RangeSlider

