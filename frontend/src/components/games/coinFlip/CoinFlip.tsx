import { BsCoin } from "react-icons/bs";
import classes from "./coinFlip.module.scss";
import { useState } from "react";
import History from "./History";
import Meta from "./Meta";
type Props = {};
const CoinFlipComponent = (props: Props) => {
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  return (
    <div className="flex h-full   flex-wrap  justify-center  gap-4  sm:flex-row">
      <Meta />
      <div className="h-[90%] max-h-[600px] min-h-[400px] w-[300px] shrink-0 rounded-[7px] bg-white p-4 shadow-md flex flex-col">
        {/* header */}
        <h3 className="flex items-center justify-center border-b-2 border-b-black pb-1 text-center text-2xl">
          <span>Flip!</span>
        </h3>
        {/* flipping coing */}
        <div
          className={`body flex h-[300px] items-center justify-center text-[90px] ${
            isFlipping && classes.coin1
          }`}
        >
          <BsCoin />
        </div>
        {/* action button */}
        <div
          className="block cursor-pointer rounded-[7px] bg-[#f82aff] p-4 text-center text-xl tracking-wider text-white "
          onClick={() => setIsFlipping(true)}
        >
          Flip
        </div>
      </div>
      <History />
    </div>
  );
};
export default CoinFlipComponent;
