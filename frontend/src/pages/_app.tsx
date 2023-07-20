import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeParse } from "@parse/react-ssr";
import dotenv from "dotenv";
dotenv.config();
initializeParse(
  process.env.INSERT_YOUR_CUSTOM_URL_HERE!, //custom url
  process.env.INSERT_YOUR_APP_ID_HERE!, //app id
  process.env.INSERT_YOUR_JS_KEY_HERE! //js
);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
