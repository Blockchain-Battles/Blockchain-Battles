import Ethereum from "@/components/Three/Ethereum";
import { SpringValues, animated } from "@react-spring/three";
import { useCursor } from "@react-three/drei";
import { FC, useState } from "react";

type Props = {
  springStyles: SpringValues;
};

const Coin: FC<Props> = ({ springStyles }) => {
  return (
    <animated.group {...springStyles}>
      <Ethereum color="gold" scale={20} />
    </animated.group>
  );
};

export default Coin;
