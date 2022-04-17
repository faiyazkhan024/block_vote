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

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListItem = ({ item }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Paper elevation={0} sx={{ px: 3 }}>
        <MuiListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="delete">
                <EditIcon color="primary" />
              </IconButton>
              <Box sx={{ mx: 1, display: "inline" }} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.username} secondary={item.email} />
        </MuiListItem>
      </Paper>
    </Box>
  );
};

export default ListItem;
