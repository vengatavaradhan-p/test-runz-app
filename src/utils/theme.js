// src/theme.js
import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFC60B",
    },
    secondary: {
      main: "#f50057",
    },
  },
  // Define custom button styles
  overrides: {
    MuiButton: {
      contained: {},
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FFF4D0",
    },
    secondary: {
      main: "#FF4081",
    },
  },
  // Define custom button styles
  overrides: {
    MuiButton: {
      contained: {},
    },
  },
});

export { lightTheme, darkTheme };
