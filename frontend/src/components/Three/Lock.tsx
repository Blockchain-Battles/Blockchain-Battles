import React, { ComponentProps } from "react";
import { Lock as LockModel } from "./models/Lock";

type Props = ComponentProps<typeof LockModel>;

const Lock = (props: Props) => {
  return (
    <LockModel
      scale={[25, 25, 25]}
      rotation={[0, -Math.PI * 0.5, 0]}
      position={[0, 10, 0]}
      {...props}
    />
  );
};

export default Lock;
