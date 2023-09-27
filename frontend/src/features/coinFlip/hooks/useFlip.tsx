import { CoinFlipChoices } from "@features/coinFlip/models";
import { errorToast, successToast } from "@features/ui";
import { coinFlipAbi } from "@features/web3";
import { isUndefined } from "lodash";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface Props {
  flipChoice?: CoinFlipChoices;
}

export const useFlip = (props: Props) => {
  const { config, error: prepareError } = usePrepareContractWrite({
    address: process.env
      .NEXT_PUBLIC_FLIP_COIN_CONTRACT_ADDRESS! as `0x${string}`,
    abi: coinFlipAbi,
    functionName: "flipACoin",
    args: [props.flipChoice],
    enabled: !isUndefined(props.flipChoice),
  });

  const { write: flip, error: writeError, data } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(receipt) {
      successToast("You won. Congrats!");
    },
    onError(error) {
      errorToast(error?.message || "Flip faild!");
    },
  });

  const errorMessage = writeError?.message || prepareError?.message;

  return {
    error: errorMessage,
    isError: !!errorMessage,
    flip,
    isLoading,
  };
};
