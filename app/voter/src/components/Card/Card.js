import React from "react";
import {
  Grid,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

import vote from "../../assets/vote.jpg";

const Card = ({ item }) => {
  return (
    <Grid item xs={12} sm={3}>
      <MuiCard sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={vote} alt="Vote" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.for}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.about?.substring(0, 256)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View More
          </Button>
        </CardActions>
      </MuiCard>
    </Grid>
  );
};

export default Card;
