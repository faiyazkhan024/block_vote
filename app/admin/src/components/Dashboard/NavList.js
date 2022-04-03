import { Link } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";

const NavList = () => (
  <>
    <Link to="/dashboard">
      <ListItemButton>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/voters">
      <ListItemButton>
        <ListItemText primary="Voters" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/candidates">
      <ListItemButton>
        <ListItemText primary="Candidates" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/elections">
      <ListItemButton>
        <ListItemText primary="Elections" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/setting">
      <ListItemButton>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </Link>
  </>
);

export default NavList;
