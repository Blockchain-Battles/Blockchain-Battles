import React, { PropsWithChildren, useRef } from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { AgXToneMapping, Camera, CameraHelper, Vector3 } from "three";
import { OrthographicCamera, useHelper } from "@react-three/drei";
type Props = PropsWithChildren;

const Canvas = ({ children }: Props) => {
  return (
    <ThreeCanvas shadows className="absolute inset-0" id="app-canvas">
      <OrthographicCamera
        makeDefault
        position={[700, 300, 1000]}
        near={0}
        far={100000}
        zoom={3}
      />
      {children}
    </ThreeCanvas>
  );
};

export default Canvas;
