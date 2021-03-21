import { createMuiTheme } from "@material-ui/core/styles";

// Colors
const black = "#000000";
const lightBlack = "#1F1E1E";
const lighterBlack = "#2C2C2C";
const white = "#FFFFFF";
const gray = "#4A4A4A";
const orange = "#FC982B";
const blue = "#0C87F2";
const green = "#5DC65D";
const yellow = "#FAE453";
const purple = "#593c77";

export const overridings = {
  name: "Dark Theme",
  palette: {
    primary: {
      main: black,
      light: gray,
      contrastText: white,
    },
    secondary: {
      main: lightBlack,
      light: lighterBlack,
      contrastText: white,
    },
    background: {
      default: black,
      paper: lightBlack,
    },
    colors: {
      orange,
      blue,
      green,
      yellow,
      purple,
    },

    type: "dark",
  },
};

export default createMuiTheme(overridings);
