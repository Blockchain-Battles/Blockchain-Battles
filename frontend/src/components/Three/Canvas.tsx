import React, { PropsWithChildren } from "react";
import { CanvasProps, Canvas as ThreeCanvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
type Props = PropsWithChildren<CanvasProps>;

const Canvas = ({ children, ...other }: Props) => {
  return (
    <ThreeCanvas
      shadows 
      className="absolute inset-0"
      id="app-canvas"
      {...other}
    >
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
