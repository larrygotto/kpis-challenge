import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SelectionSlider(props) {

  const marks = props.marks
  
  function valuetext(value) {
    return `${value.label}`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  return (
    <Box>
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        // valueLabelDisplay="auto"
        marks={marks}
        onChange={props.onChange}
      />
    </Box>
  );
}