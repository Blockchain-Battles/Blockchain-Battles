import { Stack, StackProps } from "@mui/material";
import React from "react";

type Props = StackProps;

const HStack = (props: Props) => {
  return <Stack direction="row" {...props} />;
};

export default HStack;
