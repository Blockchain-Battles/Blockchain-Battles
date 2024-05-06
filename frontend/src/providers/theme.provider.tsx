import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

type Props = {};

const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  const theme = createTheme({
    palette: {
      primary: purple,
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
