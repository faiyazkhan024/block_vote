import { Outlet, Link as RouterLink } from "react-router-dom";
import { useSnapshot } from "valtio";
import {
  Typography,
  AppBar,
  Box,
  Link,
  Toolbar,
  Button,
  Avatar,
} from "@mui/material";

import { authState } from "../../state";
import setAuthState from "../../helpers/setAuthState";
import Logo from "../../assets/logo.png";

const Layout = () => {
  const { accessToken } = useSnapshot(authState);

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuthState({});
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Logo"
            src={Logo}
            variant="square"
            sx={{ width: 56, height: 56 }}
          />
          <Box sx={{ m: 1.2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Block Vote Dashboard
          </Typography>
          <Button
            to="/login"
            color="inherit"
            onClick={logoutHandler}
            component={RouterLink}
          >
            {!accessToken ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>
      <footer>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          {"Copyright © "}
          <Link to="/" color="inherit" component={RouterLink}>
            Block Vote
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </>
  );
};

export default Layout;
