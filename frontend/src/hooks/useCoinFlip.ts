import config from "@/config";
import { CoinFlipAbi } from "@/contracts/CoinFlip.sol/CoinFlipAbi";
import { CoinStatus } from "@/models/games/CoinFlip";
import { get, isNull, random } from "lodash";
import { useRef, useState } from "react";
import { NonceTooHighError, parseEther } from "viem";

import {
  useAccount,
  useBlockNumber,
  useEstimateFeesPerGas,
  useWatchContractEvent,
  useWriteContract,
  // useFeeData as useEstimateFeesPerGas,
  // useContractWrite as useWriteContract,
  // useContractEvent as useWatchContractEvent,
} from "wagmi";

export type FlipResult = {
  didWin: boolean;
  betAmount: bigint;
};

type UseCoinFlipProps = {
  onFlipResult?(flipResult: FlipResult | null): void;
  betAmount: number;
};

const useCoinFlip = ({ onFlipResult, betAmount }: UseCoinFlipProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState<FlipResult | null>(null);

  const currentGameUid = useRef<bigint | null>(null);

  const { address } = useAccount();

  const { data: currentBlockNumber } = useBlockNumber();

  const { data: feeData } = useEstimateFeesPerGas();

  const createGameUid = () => BigInt(random(99999999));

  const writeContractMutation = useWriteContract({
    mutation: {
      onError(err) {
        console.log({ err });
        setIsLoading(false);
        onFlipResult?.(null);
      },
    },
  });

  const flip = async (choice: CoinStatus) => {
    setIsLoading(true);

    const gameUid = createGameUid();

    currentGameUid.current = gameUid;

    writeContractMutation.writeContract({
      abi: CoinFlipAbi,
      functionName: "flipCoin",
      address: config.flipCoinAddress,
      args: [choice, BigInt(gameUid)],
      value: parseEther(betAmount.toString()),
      maxFeePerGas: feeData?.maxFeePerGas,
      maxPriorityFeePerGas: feeData?.maxPriorityFeePerGas,
    });
  };

  useWatchContractEvent({
    abi: CoinFlipAbi,
    eventName: "CoinFlipped",
    address: config.flipCoinAddress,
    fromBlock: currentBlockNumber,
    args: { player: address, uid: currentGameUid.current },
    enabled: !isNull(currentGameUid.current),
    onLogs(event) {
      const betAmount = get(event, ["0", "args", "betAmount"]);
      const win = get(event, ["0", "args", "win"]);

      setIsLoading(false);
      currentGameUid.current = null;

      const result: FlipResult = { betAmount, didWin: win };

      setLastResult(result);

      onFlipResult?.(result);
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
