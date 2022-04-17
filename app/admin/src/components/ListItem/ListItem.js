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

import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListItem = ({ item, onDelete }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Paper elevation={0} sx={{ px: 3 }}>
        <MuiListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(item._id)}
            >
              <DeleteIcon color="error" />
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
