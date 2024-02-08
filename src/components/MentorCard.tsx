// MentorCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Box,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type MentorCardProps = {
  id: number;
  name: string;
  experience: number;
  areaOfExpertise: string;
  rating: number;
  bio: string;
  imageUrl: string;
};

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  experience,
  areaOfExpertise,
  rating,
  bio,
  imageUrl,
}) => {
  const fullStars = Array(rating)
    .fill(0)
    .map((_, index) => (
      <StarIcon key={index} color="primary" fontSize="large" />
    ));
  const emptyStars = Array(5 - rating)
    .fill(0)
    .map((_, index) => (
      <StarBorderIcon key={index} color="primary" fontSize="large" />
    ));

  return (
    <Card sx={{ marginBottom: "16px", overflow: "hidden" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={2}
          md={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={imageUrl}
            alt={name}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography component="div" variant="h4">
                {name}
              </Typography>
              <Box sx={{ display: "flex" }}>
                {fullStars}
                {emptyStars}
              </Box>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Experience: {experience} Years
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Area Of Expertise: {areaOfExpertise}
              </Typography>
              <Typography variant="body2">{bio}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button size="large" variant="contained" color="primary">
                View Details
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MentorCard;
