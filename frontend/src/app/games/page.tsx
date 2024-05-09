import Games from "@/components/pages/games";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
};
export default function Page() {
  return <Games />;
}
