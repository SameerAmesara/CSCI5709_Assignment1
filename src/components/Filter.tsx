import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
} from "@mui/material";

interface FilterValues {
  areaOfExpertise: string;
  experience: number;
  rating: number;
}

function Filter() {
  const [filterValues] = useState<FilterValues>({
    areaOfExpertise: "",
    experience: 3,
    rating: 0,
  });

  return (
    <Box sx={{ p: 2, width: "100%", minWidth: 200 }}>
      <Typography variant="h6">Filters</Typography>
      <FormGroup>
        <FormControl variant="outlined" sx={{ mt: 2 }}>
          <InputLabel>Area of Expertise</InputLabel>
          <Select
            value={filterValues.areaOfExpertise}
            label="Area of Expertise"
          >
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
          </Select>
        </FormControl>

        <Typography id="experience-slider" gutterBottom sx={{ mt: 2 }}>
          Professional Experience
        </Typography>
        <Slider
          value={filterValues.experience}
          aria-labelledby="experience-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
        />

        <Typography id="rating-slider" gutterBottom sx={{ mt: 2 }}>
          Ratings
        </Typography>
        <Slider
          value={filterValues.rating}
          aria-labelledby="rating-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
        />

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Search
        </Button>
      </FormGroup>
    </Box>
  );
}

export default Filter;
