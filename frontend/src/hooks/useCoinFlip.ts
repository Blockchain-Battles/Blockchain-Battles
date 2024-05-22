import config from "@/config";
import { CoinFlipAbi } from "@/contracts/CoinFlip.sol/CoinFlipAbi";
import { CoinStatus } from "@/models/games/CoinFlip";
import { Address } from "viem";
import { useAccount, useWatchContractEvent, useWriteContract } from "wagmi";

type UseCoinFlipProps = {
  onFlipResult?(): void;
};
const useCoinFlip = ({ onFlipResult }: UseCoinFlipProps) => {
  const writeContractMutation = useWriteContract();

  const { address } = useAccount();

  const flip = (choice: CoinStatus) =>
    writeContractMutation.writeContract({
      abi: CoinFlipAbi,
      functionName: "flipACoin",
      address: config.flipCoinAddress,
      args: [choice],
    });

  const unwatch = useWatchContractEvent({
    abi: CoinFlipAbi,
    eventName: "CoinFlipResult",
    address: config.flipCoinAddress,
    args: [address],
    onLogs: onFlipResult,
  });

  return { flip, ...writeContractMutation };
};

export default useCoinFlip;
