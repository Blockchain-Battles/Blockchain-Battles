import { RoundedBox } from "@react-three/drei";
import React from "react";
import { MeshStandardMaterial } from "three";

type Props = {};

const BaseBox = (props: Props) => {
  return (
    <RoundedBox
      radius={10}
      material={new MeshStandardMaterial()}
      receiveShadow
      args={[150, 100, 150]}
      position={[0, 0, 0]}
    />
  );
};

export default BaseBox;
