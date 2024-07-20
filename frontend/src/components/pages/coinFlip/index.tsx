"use client";
import Coin from "@/components/pages/coinFlip/Coin";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import config from "@/config";
import useChainNativeCoin from "@/hooks/useChainNativeCoin";
import useCoinFlip, { FlipResult } from "@/hooks/useCoinFlip";
import { CoinStatus } from "@/models/games/CoinFlip";
import View from "@/utils/three/View";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSpring } from "@react-spring/three";
import { delay, floor, isNull, toNumber } from "lodash";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formatEther, formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";

const coinY = {
  top: 100,
  base: 12,
};

const CoinFlip: FC = () => {
  const [currentCoinStatus, setCurrentCoinStatus] = useState<null | CoinStatus>(
    null
  );

  const { data: contractBalance } = useBalance({
    address: config.flipCoinAddress,
  });

  const contractBalanceNumber = +formatUnits(
    contractBalance?.value || BigInt(0),
    contractBalance?.decimals || 18
  );

  const maxBetAmount = floor(0.4 * contractBalanceNumber);

  const [prizeValue, setPrizeValue] = useState(floor(maxBetAmount / 100));

  const { isConnected } = useAccount();
  const { flip, isLoading } = useCoinFlip({
    onFlipResult(result) {
      responseReceived(result);
    },
    betAmount: prizeValue,
  });

  const nativeCoin = useChainNativeCoin();

  const [styles, api] = useSpring(() => {
    return {
      config: {
        duration: 1000,
      },
      from: {
        position: [0, coinY.base, 0],
        rotation: [-Math.PI / 2, 0, 0],
      },
    };
  });

  useEffect(() => {
    if (isLoading) {
      const flipDuration = 1000;
      delay(() => {
        api.start({
          rotation: [Math.PI * 2, Math.PI * 2, Math.PI * 2],
          config: { duration: flipDuration },
          loop: true,
          onRest: () => {
            if (!isLoading) {
              api.start({ rotation: [0, 0, 0], config: { duration: 0 } });
            }
          },
        });
      }, 400);
    }
  }, [isLoading, api]);

  /**
   * when user clicks on heads or tails
   */
  function handleCoinFlip(playerChoice: CoinStatus) {
    if (isConnected) {
      api.start({ position: [0, coinY.top, 0], config: { duration: 400 } });
      setCurrentCoinStatus(playerChoice);
      flip(playerChoice);
    } else {
      toast.error("Connect your wallet!");
    }
  }

  /**
   * when the result of the move returns
   */
  function responseReceived(result: FlipResult | null) {
    if (isNull(result)) {
      toast.error("something went wrong :(");
    } else {
      if (result.didWin) {
        toast.success(
          `Congrats 🎉! You won ${formatEther(result.betAmount)} ${nativeCoin}`
        );
      } else {
        toast.error(`You lost. Maybe next time ☹️ `);
      }
    }

    const isResultHeads =
      isNull(result) ||
      (currentCoinStatus === CoinStatus.heads && result.didWin) ||
      (currentCoinStatus === CoinStatus.tails && !result.didWin);

    if (isResultHeads) {
      api.start({
        rotation: [-Math.PI / 2, 0, 0],
        config: { duration: 400 },
      });
    } else {
      api.start({
        rotation: [Math.PI / 2, 0, 0],
        config: { duration: 400 },
      });
    }

    api.start({
      position: [0, coinY.base, 0],
      config: { duration: 400 },
    });

    setCurrentCoinStatus(null);
  }

  
  const error =
  prizeValue > maxBetAmount && "Should be less than the max amount!";
  
  const disableActionButtons = isLoading || prizeValue <= 0 || !!error
  return (
    <>
      <View>
        <Coin springStyles={styles as any} />
      </View>
      <AnimateInChildren
        height={600}
        width={500}
        m={5}
        gap={4}
        justifyContent="center"
        sx={{
          pointerEvents: "auto",
        }}
      >
        <Typography variant="h3">Flip a coin</Typography>
        <Stack gap="20px">
          <TextField
            value={prizeValue}
            onChange={(event) => setPrizeValue(+event.target.value)}
            label="Prize amount"
            InputProps={{
              type: "number",
              inputProps: {
                max: maxBetAmount,
                min: 0,
              },
              startAdornment: (
                <InputAdornment position="start">{nativeCoin}</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  max: {maxBetAmount} {nativeCoin}
                </InputAdornment>
              ),
            }}
            sx={{
              width: "320px",
            }}
            error={!!error}
            helperText={error}
          />
          <Stack gap="20px" direction="row">
            <Button
              onClick={() => handleCoinFlip(CoinStatus.heads)}
              sx={{ width: 150, height: 150, fontSize: 15 }}
              disabled={disableActionButtons}
              variant={
                currentCoinStatus === CoinStatus.heads
                  ? "contained"
                  : "outlined"
              }
            >
              Heads
            </Button>

            <Button
              onClick={() => handleCoinFlip(CoinStatus.tails)}
              sx={{ width: 150, height: 150 }}
              disabled={disableActionButtons}
              variant={
                currentCoinStatus === CoinStatus.tails
                  ? "contained"
                  : "outlined"
              }
              color="primary"
            >
              Tails
            </Button>
          </Stack>
        </Stack>
      </AnimateInChildren>
    </>
  );
};

export default CoinFlip;
