"use client";

import GoogleAuthProvider from "@/providers/googleauth.provider";
import QueryProvider from "@/providers/query.provider";
import ThemeProvider from "@/providers/theme.provider";
import ToastProvider from "@/providers/toast.provider";
import WagmiProvider from "@/providers/wagmi.provider";
import React, { PropsWithChildren } from "react";

type Props = {};

const Providers = ({ children }: PropsWithChildren<Props>) => {
  return (
    <ThemeProvider>
      <WagmiProvider>
        <GoogleAuthProvider>
          <ToastProvider>
            <QueryProvider>{children}</QueryProvider>
          </ToastProvider>
        </GoogleAuthProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default Providers;
