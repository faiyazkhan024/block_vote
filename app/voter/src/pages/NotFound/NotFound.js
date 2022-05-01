import React from "react";
import { Paper, Box } from "@mui/material";

import notFound from "../../assets/404.jpg";

const NotFound = () => {
  return (
    <Paper elevation={0}>
      <Box sx={{ width: "60%", maxWidth: "600px", margin: "auto", pt: 10 }}>
        <img src={notFound} alt=""></img>
      </Box>
    </Paper>
  );
};

export default NotFound;
