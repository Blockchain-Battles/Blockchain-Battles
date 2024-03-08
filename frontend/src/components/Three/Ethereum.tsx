import React, { ComponentProps } from "react";
import { Model as EthereumModel } from "@/components/Three/models/Ethereum";
type Props = ComponentProps<typeof EthereumModel>;

const Ethereum = (props: Props) => {
  return (
    <EthereumModel
      color="silver"
      scale={[20, 20, 40]}
      position={[10, 20, -10]}
      rotation={[-Math.PI * 0.5, 0, 0]}
      {...props}
    />
  );
};

export default Ethereum;
