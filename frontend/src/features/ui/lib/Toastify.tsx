import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const ToastifyProvider = (props: { children: ReactNode }) => {
  return (
    <>
      {props.children}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};
