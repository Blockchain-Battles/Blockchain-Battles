import React, { ComponentProps, forwardRef } from "react";
import { Model as EthereumModel } from "@/components/Three/models/Ethereum";
type Props = ComponentProps<typeof EthereumModel>;

const Ethereum = forwardRef(function Ethereum(props: Props, ref: Props["ref"]) {
  return (
    <EthereumModel ref={ref} color="silver" scale={[20, 20, 40]} {...props} />
  );
});

export default Ethereum;
