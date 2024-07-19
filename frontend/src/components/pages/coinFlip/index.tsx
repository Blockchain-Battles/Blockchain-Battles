"use client";
import Coin from "@/components/pages/coinFlip/Coin";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import useChainNativeCoin from "@/hooks/useChainNativeCoin";
import useCoinFlip, { FlipResult } from "@/hooks/useCoinFlip";
import { CoinStatus } from "@/models/games/CoinFlip";
import View from "@/utils/three/View";
import { Button, Stack, Typography } from "@mui/material";
import { useSpring } from "@react-spring/three";
import { delay, isNull } from "lodash";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

const coinY = {
  top: 100,
  base: 12,
};

const CoinFlip: FC = () => {
  const [currentCoinStatus, setCurrentCoinStatus] = useState<null | CoinStatus>(
    null
  );

  const { isConnected } = useAccount();
  const { flip, isLoading, lastResult } = useCoinFlip({
    onFlipResult(result) {
      responseReceived(result);
    },
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

  return (
    <>
      <View>
        <Coin springStyles={styles as any} />
      </View>
      {}
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
        <Stack gap={2} direction="row">
          <Button
            onClick={() => handleCoinFlip(CoinStatus.heads)}
            sx={{ width: 150, height: 150, fontSize: 15 }}
            disabled={isLoading}
            variant={
              currentCoinStatus === CoinStatus.heads ? "contained" : "outlined"
            }
          >
            Heads
          </Button>

          <Button
            onClick={() => handleCoinFlip(CoinStatus.tails)}
            sx={{ width: 150, height: 150 }}
            disabled={isLoading}
            variant={
              currentCoinStatus === CoinStatus.tails ? "contained" : "outlined"
            }
            color="primary"
          >
            Tails
          </Button>
        </Stack>
      </AnimateInChildren>
    </>
  );
};

export default CoinFlip;
