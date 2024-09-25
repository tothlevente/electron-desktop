import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";

import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

interface Props {
  logo?: React.JSX.Element;
  title?: string;
}

export default function WindowBar({ logo, title }: Props) {
  const handleClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            {logo}
            <Typography sx={{ pl: 1 }}>{title}</Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-app-button"
            sx={() => ({
              color: red[400],
            })}
          >
            <CancelIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
