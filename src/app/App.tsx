import React from "react";

import WindowsBar from "./windows/WindowsBar";
import WindowsLogo from "./windows/WindowsLogo";
import theme from "./theme";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WindowsBar logo={<WindowsLogo width={32} height={32} />} title="My app" />
    </ThemeProvider>
  );
}
