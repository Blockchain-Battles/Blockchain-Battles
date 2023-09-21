import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
type Props = { children: ReactNode };
const Theme = (props: Props) => {
  const theme = createTheme({
    palette: {
      primary: purple,
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default Theme;
