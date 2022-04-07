import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

import axios from "../../config/axios";
import useLocal from "../../hooks/useLocal";
import setAuthState from "../../helpers/setAuthState";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [auth, setAuth] = useLocal("auth", {});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setAuthState(auth);
    if (Object.keys(auth).length !== 0) navigate(from, { replace: true });
  }, [auth]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!username && !password) return setError("Invalid Username/Password");
    try {
      const response = await axios.post("auth/login/admin", {
        username,
        password,
      });
      setAuth({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
      {error && (
        <Typography sx={{ fontSize: 14, color: "red", textAlign: "center" }}>
          {error}
        </Typography>
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
