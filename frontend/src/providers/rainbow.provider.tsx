import "@rainbow-me/rainbowkit/styles.css";

import { FC, PropsWithChildren } from "react";
import { RainbowKitProvider as RProvider } from "@rainbow-me/rainbowkit";

const RainbowProvider: FC<PropsWithChildren> = ({ children }) => {
  return <RProvider>{children}</RProvider>;
};

export default RainbowProvider;
