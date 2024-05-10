import { Model as FlagModel } from "@/components/Three/models/Flag";
import React, { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<typeof FlagModel>;

const Flag = forwardRef(function Flag(props: Props, ref: Props["ref"]) {
  return (
    <FlagModel
      ref={ref}
      scale={[0.1, 0.08, 0.1]}
      rotation={[0, -Math.PI * 0.3, 0]}
      {...props}
    />
  );
});

export default Flag;
