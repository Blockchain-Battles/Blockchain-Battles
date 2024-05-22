import { FC, PropsWithChildren } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/config";

const GoogleAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={config.googleAuthClientId}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
