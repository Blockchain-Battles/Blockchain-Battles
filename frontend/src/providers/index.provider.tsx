"use client";

import QueryProvider from "@/providers/query.provider";
import RainbowProvider from "@/providers/rainbow.provider";
import ThemeProvider from "@/providers/theme.provider";
import WagmiProvider from "@/providers/wagmi.provider";
import React, { PropsWithChildren } from "react";

type Props = {};

const Providers = ({ children }: PropsWithChildren<Props>) => {
  return (
    <ThemeProvider>
      <WagmiProvider>
        <QueryProvider>{children}</QueryProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default Providers;
