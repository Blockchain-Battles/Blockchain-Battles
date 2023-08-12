import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeParse } from "@parse/react-ssr";
import { AuthProvider } from "@/provider/Auth/Auth";
import { useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";

initializeParse(
  process.env.PARSE_SERVER_URL!, //custom url
  process.env.PARSE_APP_ID!, //app id
  process.env.PARSE_JAVASCRIPT_KEY! //js
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
