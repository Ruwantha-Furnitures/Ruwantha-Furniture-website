import React from "react";
import { Rating } from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function StarRating() {
  const [value, setValue] = React.useState(1);

  return (
    <div>
    <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Add Your Rating</Typography> */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      
    </div>
  );
}
