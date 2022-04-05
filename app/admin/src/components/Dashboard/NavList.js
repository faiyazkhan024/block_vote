import { Link } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";

const NavList = () => (
  <>
    <Link to="">
      <ListItemButton>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="voters">
      <ListItemButton>
        <ListItemText primary="Voters" />
      </ListItemButton>
    </Link>
    <Link to="candidates">
      <ListItemButton>
        <ListItemText primary="Candidates" />
      </ListItemButton>
    </Link>
    <Link to="elections">
      <ListItemButton>
        <ListItemText primary="Elections" />
      </ListItemButton>
    </Link>
    <Link to="setting">
      <ListItemButton>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </Link>
  </>
);

export default NavList;
