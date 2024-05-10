"use client";
import { Box, Stack, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

type Props = {
  show: boolean;
};

const Splash: FC<Props> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <Stack
          zIndex={zIndex.modal}
          justifyContent="center"
          bgcolor="primary.800"
          alignItems="center"
          component={motion.div}
          top="0"
          left="0"
          height="100dvh"
          width="100vw"
          position="fixed"
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 1,
          }}
        >
          <Typography variant="h2" fontWeight="800">
            BlockChain Battles
          </Typography>
        </Stack>
      )}
    </AnimatePresence>
  );
};

export default Splash;
