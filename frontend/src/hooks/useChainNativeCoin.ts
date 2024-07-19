import { values } from "lodash";
import * as chains from "viem/chains";
import { useChainId } from "wagmi";
 
const useChainNativeCoin = () => {
  const chainId = useChainId();

  const symbol = values(chains).find((chain) => chain.id === chainId)
    ?.nativeCurrency.symbol || "ETH"

  return symbol;
};

export default useChainNativeCoin;
