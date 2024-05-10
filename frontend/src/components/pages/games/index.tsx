"use client";
import Flag from "@/components/Three/Flag";
import { Model } from "@/components/Three/models/Flag";
import GameBox from "@/components/pages/games/gameBox";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import View from "@/utils/three/View";
import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";

type Props = {};

const Games: FC<Props> = (props) => {
  return (
    <>
      <View>
        <Flag />
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
        <Typography variant="h3">Pick a game</Typography>

        <Stack>
          <GameBox
            title="Coin flip"
            image="/images/ethereumcoin.png"
            href="/games/coinFlip"
          />
        </Stack>
      </AnimateInChildren>
    </>
  );
};

export default Games;
