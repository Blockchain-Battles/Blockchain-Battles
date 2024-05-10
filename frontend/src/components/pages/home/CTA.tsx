import AnimateInChildren from "@/components/ui/AnimateInChildren";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
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
