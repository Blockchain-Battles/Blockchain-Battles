import CoinFlipComponent from "@features/games/coinFlip/CoinFlip";
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
