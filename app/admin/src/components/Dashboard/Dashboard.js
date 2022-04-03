import { Outlet } from "react-router-dom";
import { CssBaseline, Drawer as MuiDrawer, Box, List } from "@mui/material";
import { styled } from "@mui/material/styles";

import NavList from "./NavList";

const Drawer = styled(MuiDrawer)({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 135,
    boxSizing: "border-box",
  },
});

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <CssBaseline />
      <Drawer variant="permanent">
        <List component="nav">
          <NavList />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "85vh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
