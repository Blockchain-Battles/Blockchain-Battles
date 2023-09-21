import "assets/globals.css";
import type { AppProps } from "next/app";
import { initializeParse } from "@parse/react-ssr";
import { AuthProvider } from "@features/authorization/Auth/Auth";
import MainLayout from "@features/layouts/Main/MainLayout";
import { ToastifyProvider } from "@features/ui";
import RainbowKitWrapper from "@features/web3/context/rainbowKit";
import Theme from "@features/ui/context/Theme";

initializeParse(
  process.env.NEXT_PUBLIC_PARSE_SERVER_URL!, //custom url
  process.env.NEXT_PUBLIC_PARSE_APP_ID!, //app id
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY!, //js
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <ToastifyProvider>
        <RainbowKitWrapper>
          <AuthProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthProvider>
        </RainbowKitWrapper>
      </ToastifyProvider>
    </Theme>
  );
}
