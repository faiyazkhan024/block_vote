import React from "react";
import { Paper, Box, Typography, Grid } from "@mui/material";

import empty from "../../assets/empty.jpg";

const Empty = ({ comment }) => {
  return (
    <Paper elevation={0}>
      <Box sx={{ width: "60%", margin: "auto", pt: 10 }}>
        <img src={empty}></img>
      </Box>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component="h2" variant="h3">
          Empty
        </Typography>
        <Typography component="p" variant="subtitle1">
          {comment}
        </Typography>
        <Box sx={{ mb: 5 }} />
      </Grid>
    </Paper>
  );
};

export default Empty;
