import ThemeProvider from "@/providers/theme.provider";
import React, { PropsWithChildren } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '../context/AuthContext';
import { initializeParse } from "@/services/parse/parseConfig";

initializeParse()

const GOOGLE_CLIENT_ID = process.env.VITE_GOOGLE_CLIENT_ID as string


type Props = {};

const Providers = ({ children }: PropsWithChildren<Props>) => {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ThemeProvider>{children}</ThemeProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  )
};

export default Providers;
