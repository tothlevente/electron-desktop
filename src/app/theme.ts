import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[600],
    },
    background: {
      default: grey[300],
    },
  },
});

export default theme;
