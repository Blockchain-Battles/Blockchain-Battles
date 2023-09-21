import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiConfig, chainConfig } from "@features/web3";
import { ReactNode } from "react";
const RainbowKitWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        coolMode
        theme={lightTheme({
          accentColor: "#f82aff",
          fontStack: "system",
        })}
        chains={chainConfig.chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
export default RainbowKitWrapper;
