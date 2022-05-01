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

const ListItem = ({ item, onDelete, icon }) => {
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
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          {item?.for ? (
            <ListItemText primary={item.for} secondary={item.about} />
          ) : (
            <ListItemText
              primary={`${item.firstName} ${item.middleName} ${item.lastName}`}
              secondary={item.email}
            />
          )}
        </MuiListItem>
      </Paper>
    </Box>
  );
};

export default ListItem;
