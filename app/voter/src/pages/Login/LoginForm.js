import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

import useLocal from "../../hooks/useLocal";
import setAuthState from "../../helpers/setAuthState";
import setVoterState from "../../helpers/setVoterState";
import { login } from "../../service";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [auth, setAuth] = useLocal("auth", {});
  const [voter, setVoter] = useLocal("voter", {});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setAuthState(auth);
    setVoterState(voter);
    if (Object.keys(auth).length !== 0) navigate(from, { replace: true });
  }, [auth, voter, navigate, from]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!username && !password) setError("Username/Password is required");
    try {
      await login({ username, password, setAuth, setVoter });
    } catch (error) {
      setError(error.message);
      throw new Error(error);
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
