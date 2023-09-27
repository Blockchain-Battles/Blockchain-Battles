import { CoinFlipChoices } from "@features/coinFlip/models";
import { errorToast, successToast } from "@features/ui";
import { coinFlipAbi } from "@features/web3";
import { isUndefined } from "lodash";
import { TransactionReceipt } from "viem";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

interface Props {
  flipChoice?: CoinFlipChoices;
  onSettled?: (receipt?: TransactionReceipt) => void;
}

export const useFlip = (props: Props) => {
  const {
    config,
    error: prepareError,
    isLoading: isPreparing,
  } = usePrepareContractWrite({
    address: process.env
      .NEXT_PUBLIC_FLIP_COIN_CONTRACT_ADDRESS! as `0x${string}`,
    abi: coinFlipAbi,
    functionName: "flipACoin",
    args: [props.flipChoice],
    enabled: !isUndefined(props.flipChoice),
    onError(error) {
      errorToast(error.message);
    },
  });

  const {
    write: flip,
    error: writeError,
    data,
    isLoading: isFlipping,
  } = useContractWrite(config);

  const { isLoading: isWaiting } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(receipt) {
      successToast("You won. Congrats!");
    },
    onError(error) {
      errorToast(error?.message || "Flip faild!");
    },
    onSettled(receipt) {
      props.onSettled?.(receipt);
    },
  });

  const errorMessage = writeError?.message || prepareError?.message;

  return {
    error: errorMessage,
    isError: !!errorMessage,
    flip,
    isFlipping: isWaiting || isFlipping,
  };
};
