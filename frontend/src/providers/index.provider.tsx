"use client";

import GoogleAuthProvider from "@/providers/googleauth.provider";
import QueryProvider from "@/providers/query.provider";
import ThemeProvider from "@/providers/theme.provider";
import WagmiProvider from "@/providers/wagmi.provider";
import React, { PropsWithChildren } from "react";

type Props = {};

const Providers = ({ children }: PropsWithChildren<Props>) => {
  return (
    <ThemeProvider>
      <WagmiProvider>
        <GoogleAuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </GoogleAuthProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default Providers;
