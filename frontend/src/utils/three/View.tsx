import { PropsWithChildren } from "react";
import { uiTunnle } from "./tunnle";

export default function View({ children }: PropsWithChildren) {
  return <uiTunnle.In>{children}</uiTunnle.In>;
}
