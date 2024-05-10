"use client";
import Ethereum from "@/components/Three/Ethereum";
import Coin from "@/components/pages/coinFlip/Coin";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import View from "@/utils/three/View";
import { Button, Stack, Typography } from "@mui/material";
import { useSpring } from "@react-spring/three";
import { FC, useEffect, useState } from "react";

const CoinFlip: FC = () => {
  const [loading, setLoading] = useState(false);

  const [styles, api] = useSpring(() => {
    return {
      from: {
        position: [0, 10, 0],
        rotation: [-Math.PI / 2, 0, 0],
      },
    };
  });

  const startRequest = async () => {
    api.start({ position: [0, 100, 0] });

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    responseReceived();
  };

  const responseReceived = () => {
    setLoading(false);

    api.start({ position: [0, 10, 0], rotation: [0, 0, 0] });
  };

  useEffect(() => {
    if (loading) {
      const flipDuration = 1000;

      api.start({
        rotation: [Math.PI * 2, Math.PI * 2, Math.PI * 2],
        config: { duration: flipDuration },
        loop: true,
        onRest: () => {
          if (!loading) {
            api.start({ rotation: [0, 0, 0], config: { duration: 0 } });
          }
        },
      });
    } else {
      api.start({ rotation: [-Math.PI / 2, 0, 0], config: { duration: 0 } });
    }
  }, [loading, api]);

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
            onClick={startRequest}
            sx={{ width: 150, height: 150, fontSize: 15 }}
          >
            Heads
          </Button>
          <Button sx={{ width: 150, height: 150 }}>Tails</Button>
        </Stack>
      </AnimateInChildren>
    </>
  );
};

export default CoinFlip;
