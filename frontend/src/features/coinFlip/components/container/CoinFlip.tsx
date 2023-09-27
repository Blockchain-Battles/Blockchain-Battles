import { BsCoin } from "react-icons/bs";
import classes from "./coinFlip.module.scss";
import { useState, useEffect } from "react";
import History from "@features/coinFlip/components/History";
import Meta from "@features/coinFlip/components/Details";
import { useFlip } from "@features/coinFlip/hooks/useFlip";
import clsx from "clsx";
import { Button, CircularProgress } from "@mui/material";
import { CoinFlipChoices } from "@features/coinFlip/models";
import { AiOutlineLoading } from "react-icons/ai";
import { isUndefined } from "lodash";
type Props = {};
export const CoinFlipComponent = (props: Props) => {
  const [coinChoice, setCoinChoice] = useState<CoinFlipChoices>();
  const { error, flip, isError, isFlipping } = useFlip({
    flipChoice: coinChoice,
    onSettled() {
      setCoinChoice(undefined);
    },
  });

  //if a coin side is chosen, then flip the coin
  useEffect(() => {
    if (!isUndefined(coinChoice) && !isFlipping) {
      flip?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinChoice]);

  return (
    <div className="flex h-full flex-wrap justify-center gap-4 sm:flex-row">
      <Meta />
      <div className="flex h-[90%] max-h-[400px] min-h-[400px] w-[300px] shrink-0 flex-col rounded-[7px] bg-white p-4 shadow-md">
        {/* header */}
        <h3 className="flex items-center justify-center border-b-2 border-b-black pb-1 text-center text-2xl">
          <span>Flip!</span>
        </h3>
        {/* flipping coing */}
        <div
          className={clsx(
            "body flex h-[300px] items-center justify-center text-[90px]",
            isFlipping && classes.coin1,
          )}
        >
          <BsCoin />
        </div>
        {/* action button */}
        {isFlipping && (
          <div className="m-4 text-center">
            <CircularProgress />
          </div>
        )}
        {!isFlipping && (
          <div className="flex items-center justify-between">
            <Button
              variant="contained"
              className="mx-2 mt-auto block basis-[50%] cursor-pointer rounded-[7px] bg-[#f82aff] p-4 text-center text-xl tracking-wider text-white "
              onClick={() => setCoinChoice(CoinFlipChoices.head)}
            >
              Heads
            </Button>
            <Button
              variant="contained"
              className="mx-2 mt-auto block basis-[50%] cursor-pointer rounded-[7px] bg-[#f82aff] p-4 text-center text-xl tracking-wider text-white "
              onClick={() => setCoinChoice(CoinFlipChoices.tails)}
            >
              Tails
            </Button>
          </div>
        )}
      </div>
      <History />
    </div>
  );
};
