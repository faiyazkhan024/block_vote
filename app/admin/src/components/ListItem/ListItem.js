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

import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Paper elevation={0} rounded sx={{ px: 3 }}>
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
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary="Secondary text" />
        </MuiListItem>
      </Paper>
    </Box>
  );
};

export default ListItem;
