import { CoinFlipAbi } from "@/contracts/CoinFlip.sol/CoinFlipAbi";
import { CoinStatus } from "@/models/games/CoinFlip";
import { useWriteContract } from "wagmi";

const useCoinFlip = () => {
  const writeContractMutation = useWriteContract();

  const flip = (choice: CoinStatus) =>
    writeContractMutation.writeContract({
      abi: CoinFlipAbi,
      functionName: "flipACoin",
      address: "0x",
      args: [choice],
    });

  return { flip, ...writeContractMutation };
};

export default useCoinFlip;
