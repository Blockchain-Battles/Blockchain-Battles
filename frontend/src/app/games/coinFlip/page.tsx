import CoinFlip from "@/components/pages/coinFlip";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Coin Flip'
}

export default function Page() {
  return <CoinFlip/>
}
