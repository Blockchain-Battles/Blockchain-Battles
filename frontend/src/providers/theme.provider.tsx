import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { purple, lightGreen } from "@mui/material/colors";
import { FiraCode } from "@/assets/fonts";

type Props = {};

const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  const theme = createTheme({
    palette: {
      primary: lightGreen,
      mode: "dark",
    },
    typography: {
      fontFamily: FiraCode?.style?.fontFamily,
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "outlined",
        },
      },
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
