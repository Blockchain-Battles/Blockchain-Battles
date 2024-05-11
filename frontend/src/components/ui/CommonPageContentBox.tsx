import AnimateInChildren from "@/components/ui/AnimateInChildren";
import { FC, PropsWithChildren } from "react";

const CommonPageContentBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AnimateInChildren
      height={600}
      width={500}
      m={5}
      gap={4}
      justifyContent="center"
      sx={{
        pointerEvents: "auto",
      }}
    >
      {children}
    </AnimateInChildren>
  );
};
export default CommonPageContentBox