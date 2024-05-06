import { Box, BoxProps } from "@mui/material";
import { Variants, motion } from "framer-motion";
import React, { Children, PropsWithChildren } from "react";

type Props = BoxProps;

const AnimateInChildren = ({
  children,
  ...boxProps
}: PropsWithChildren<Props>) => {
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
    // @ts-ignore
    <Box display="flex" flexDirection="column" variants={container} component={motion.div}  initial="init"  animate="animate"  {...boxProps}>
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </Box>
  );
};

export default AnimateInChildren;
