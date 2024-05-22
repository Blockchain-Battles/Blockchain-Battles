import "@rainbow-me/rainbowkit/styles.css";

import { FC, PropsWithChildren } from "react";
import {
  RainbowKitProvider as RProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { useTheme } from "@mui/material";

const RainbowProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    palette: {
      primary: { main },
      text: { primary: textColor },
    },
    typography: { fontFamily },
  } = useTheme();
  return (
    <RProvider
      theme={darkTheme({
        accentColor: main,
        fontStack: fontFamily as any,
        accentColorForeground: textColor,
      })}
    >
      {children}
    </RProvider>
  );
};

export default RainbowProvider;
