import {CoinFlipComponent} from "@features/coinFlip";
import Head from "next/head";
type Props = {};
const CoinFlip = (props: Props) => {
  return (
    <>
    <Head>
      <title>Coin Flip</title>
    </Head>
      <CoinFlipComponent />
    </>
  );
};
export default CoinFlip;
