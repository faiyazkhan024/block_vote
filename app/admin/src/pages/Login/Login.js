import React from "react";
import { Avatar, Typography, Container, Link, Box } from "@mui/material";

import LoginForm from "./LoginForm";
import Logo from "../../assets/logo.png";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar alt="Logo" src={Logo} sx={{ width: 58, height: 58 }} />
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
        <Typography component="p">Login using admin credential</Typography>
      </Box>
      <LoginForm />
      <Link href="#" variant="body2">
        Forgot password?
      </Link>
    </Container>
  );
};

export default Login;
