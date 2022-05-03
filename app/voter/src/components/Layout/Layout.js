import { Outlet, Link as RouterLink } from "react-router-dom";
import { Typography, AppBar, Box, Link, Toolbar, Button } from "@mui/material";

import useAuth from "../../hooks/useAuth";

const Layout = () => {
  const { accessToken } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ m: 1.2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" color="inherit" component={RouterLink}>
              Block Vote
            </Link>
          </Typography>
          {!accessToken ? (
            <Button to="/login" color="inherit" component={RouterLink}>
              Login
            </Button>
          ) : (
            <Button
              to="/"
              color="inherit"
              component={RouterLink}
              onClick={() => {
                localStorage.removeItem("auth");
                localStorage.removeItem("voter");
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ pt: 4, pb: 4 }}
      >
        {"Copyright © "}
        <Link to="/" color="inherit" component={RouterLink}>
          Block Vote
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

export default Layout;
