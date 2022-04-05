import { Outlet } from "react-router-dom";
import { Container, Drawer as MuiDrawer, Box, List } from "@mui/material";
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
      <Drawer variant="permanent">
        <List component="nav">
          <NavList />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: "85vh",
          overflow: "auto",
        }}
      >
        <Container fixed>
          <Box sx={{ mt: 10 }} />
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
