import { FC, PropsWithChildren } from "react";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import config from "@/config";
import { mainnet, polygonZkEvm } from "viem/chains";
import { WagmiProvider as WProvider } from "wagmi";

const rainbowConfig = getDefaultConfig({
  appName: "BlockChainBattles",
  projectId: config.projectId,
  chains: [mainnet, polygonZkEvm],
  ssr: true,
});

const WagmiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <WProvider config={rainbowConfig}>{children}</WProvider>;
};

export default WagmiProvider;
