import config from "@/config";
import { CoinFlipAbi } from "@/contracts/CoinFlip.sol/CoinFlipAbi";
import { CoinStatus } from "@/models/games/CoinFlip";
import { useEffect, useState } from "react";
import { Address } from "viem";
import { useAccount, useWatchContractEvent, useWriteContract } from "wagmi";

type UseCoinFlipProps = {
  onFlipResult?(...args: any): void;
};
const useCoinFlip = ({ onFlipResult }: UseCoinFlipProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState<CoinStatus | null>(null);
  const writeContractMutation = useWriteContract({
    mutation: {
      onError(err) {
        console.log({ err });
        setIsLoading(false);
      },
    },
  });

  const { address } = useAccount();

  const flip = (choice: CoinStatus) => {
    setIsLoading(true);

    console.log({ choice, config: config.flipCoinAddress });

    writeContractMutation.writeContract({
      abi: CoinFlipAbi,
      functionName: "flipCoin",
      address: config.flipCoinAddress,
      args: [choice,],
    });
  };

  useWatchContractEvent({
    abi: CoinFlipAbi,
    eventName: "CoinFlipped",
    address: config.flipCoinAddress,
    // args: { player: address },
    onLogs(...args) {
      setIsLoading(false);
      // set the coin result
      // setLastResult(args[0]);
      onFlipResult?.(...args);
    },
  });

  return {
    flip,
    ...writeContractMutation,
    lastResult,
    isLoading,
  };
};

export default useCoinFlip;
