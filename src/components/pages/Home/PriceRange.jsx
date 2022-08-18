import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function PriceRange(props) {
  return (
    <Box sx={{ width: props.width }}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{ color: props.color }}
      />
    </Box>
  );
}
