import React from "react";
import { Container, Paper, Typography } from "@mui/material";

const FormContainer = ({ children, title }) => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center" sx={{ mb: 3 }}>
          {title}
        </Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default FormContainer;
