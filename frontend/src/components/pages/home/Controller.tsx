"use client";
import { RoundedBox } from "@react-three/drei";
import React from "react";
import { MeshBasicMaterial } from "three";

type Props = {};

const Controller = (props: Props) => {
  return (
    <RoundedBox
      args={[10, 10, 10]}
      material={new MeshBasicMaterial({ color: "red" })}
    />
  );
};

export default Controller;
