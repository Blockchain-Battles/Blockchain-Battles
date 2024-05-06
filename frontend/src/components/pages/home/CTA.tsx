import AnimateInChildren from "@/components/ui/AnimateInChildren";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  const container: Variants = {
    init: { x: -100 },
    animate: {
      x: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const item: Variants = {
    init: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
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
      <Typography variant="h3">Enjoy the Blocks</Typography>
      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque,
        ullam eos maiores sed fugit eum quae id eaque in.
      </Typography>
      <Button
        sx={{
          width: "max-content",
          p: (theme) => theme.spacing(2, 3),
        }}
        component={Link}
        href="/games"
      >
        Play a game for free :)
      </Button>
    </AnimateInChildren>
  );
};

export default CTA;
