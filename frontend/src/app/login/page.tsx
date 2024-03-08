import Login from "@/components/pages/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};
export default function Page() {
  return (
    <>
      <Login />
    </>
  );
}
