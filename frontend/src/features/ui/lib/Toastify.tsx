import { ReactNode } from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const ToastifyProvider = (props: { children: ReactNode }) => {
  return (
    <>
      {props.children}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};
export const successToast = (content: ReactNode, toastOptions?: ToastOptions) =>
  toast.success(content, { ...toastOptions });
export const errorToast = (content: ReactNode, toastOptions?: ToastOptions) =>
  toast.error(content, { ...toastOptions });
export const warningToast = (content: ReactNode, toastOptions?: ToastOptions) =>
  toast.warning(content, { ...toastOptions });
