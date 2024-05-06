import ThemeProvider from "@/providers/theme.provider";
import React, { PropsWithChildren } from "react";

type Props = {};

const Providers = ({ children }: PropsWithChildren<Props>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
