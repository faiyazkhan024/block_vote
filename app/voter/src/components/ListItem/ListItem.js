import React from "react";

import {
  ListItem as MuiListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListItem = ({ item, onVote }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Paper elevation={2} sx={{ px: 3 }}>
        <MuiListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onVote(item._id)}
            >
              <HowToVoteIcon color="primary" />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${item.firstName} ${item.middleName} ${item.lastName}`}
            secondary={item.email}
          />
        </MuiListItem>
      </Paper>
    </Box>
  );
};

export default ListItem;
