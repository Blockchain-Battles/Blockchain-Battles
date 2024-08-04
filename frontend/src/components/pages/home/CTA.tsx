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
        Step into a world of endless possibilities where every block holds a new adventure!
      </Typography>
      <Button
        sx={{
          width: "max-content",
          p: (theme) => theme.spacing(2, 3),
        }}
        component={Link}
        href="/games"
      >
        Let&apos;s Play :)
      </Button>
    </AnimateInChildren>
  );
};

export default CTA;
