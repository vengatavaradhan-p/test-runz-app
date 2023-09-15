import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";
import "../../assets/styles/App.scss";

export default function AppProfileDrawer({ openDrawer }) {
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={openDrawer}
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 600,
          boxSizing: "border-box",
        },
        boxShadow: "-12px 4px 19px 0px #0000001A",
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", padding: '20px' }}>
        <Typography variant="h6">Edit Profile</Typography>
      </Box>
    </Drawer>
  );
}
