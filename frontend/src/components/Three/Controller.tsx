import React, { ComponentProps } from "react";
import { Controller as ControllerGLTF } from "@/components/Three/models/Controller";
type Props = ComponentProps<typeof ControllerGLTF>;

const Controller = (props: Props) => {
  return (
    <ControllerGLTF
      scale={25}
      position={[0, -5, 60]}
      rotation={[Math.PI * 0.15, 0, 0]}
      {...props}
    />
  );
};

export default Controller;
