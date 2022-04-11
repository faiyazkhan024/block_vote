import { Link } from "react-router-dom";
import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import BallotIcon from "@mui/icons-material/Ballot";
import SettingsIcon from "@mui/icons-material/Settings";

const NavList = ({ setOpen }) => {
  return (
    <>
      <ListItemButton component={Link} to="" onClick={() => setOpen(false)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="voters"
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Voters" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="candidates"
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>
          <RecordVoiceOverIcon />
        </ListItemIcon>
        <ListItemText primary="Candidates" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="elections"
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>
          <BallotIcon />
        </ListItemIcon>
        <ListItemText primary="Elections" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="setting"
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </>
  );
};

export default NavList;
