"use client";
import Coin from "@/components/pages/coinFlip/Coin";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import useCoinFlip from "@/hooks/useCoinFlip";
import { CoinStatus } from "@/models/games/CoinFlip";
import View from "@/utils/three/View";
import { Button, Stack, Typography } from "@mui/material";
import { useSpring } from "@react-spring/three";
import { FC, useEffect, useState } from "react";

const CoinFlip: FC = () => {
  const [currentCoinStatus, setCurrentCoinStatus] = useState<null | CoinStatus>(
    null
  );

  const { flip, isLoading, lastResult } = useCoinFlip({
    onFlipResult(result) {
      // todo : implement result handling (if won, or got the result, drop down the coin accordingly)
      responseReceived();
    },
  });

  const [styles, api] = useSpring(() => {
    return {
      from: {
        position: [0, 12, 0],
        rotation: [-Math.PI / 2, 0, 0],
      },
    };
  });

  useEffect(() => {
    if (isLoading) {
      const flipDuration = 1000;

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
    } else {
      // set the last coin up face by the result
      if (lastResult === CoinStatus.heads) {
        api.start({ rotation: [-Math.PI / 2, 0, 0], config: { duration: 0 } });
      } else {
        api.start({ rotation: [Math.PI / 2, 0, 0], config: { duration: 0 } });
      }
    }
  }, [isLoading, api, lastResult]);

  /**
   * when user clicks on heads or tails
   */
  function handleCoinFlip(playerChoice: CoinStatus) {
    api.start({ position: [0, 100, 0] });
    setCurrentCoinStatus(playerChoice);
    flip(playerChoice);
  }

  /**
   * when the result of the move returns
   */
  function responseReceived() {
    setCurrentCoinStatus(null);
    api.start({ position: [0, 12, 0], rotation: [0, 0, 0] });
  }

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
        <Stack gap={2} direction="row">
          <Button
            onClick={() => handleCoinFlip(CoinStatus.heads)}
            sx={{ width: 150, height: 150, fontSize: 15 }}
            disabled={isLoading}
            variant={
              currentCoinStatus === CoinStatus.heads ? "contained" : undefined
            }
          >
            Heads
          </Button>

          <Button
            onClick={() => handleCoinFlip(CoinStatus.tails)}
            sx={{ width: 150, height: 150 }}
            disabled={isLoading}
            variant={
              currentCoinStatus === CoinStatus.tails ? "contained" : undefined
            }
          >
            Tails
          </Button>
        </Stack>
      </AnimateInChildren>
    </>
  );
};

export default CoinFlip;
