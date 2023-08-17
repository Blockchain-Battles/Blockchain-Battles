import Image from "next/image";
import classes from './Landing.module.scss'
type Props = {};
const Landing = (props: Props) => {
  return (
    <section className={`flex h-[60vh] w-full items-center py-[64px]`}>
      <div className="w-[50%] ">
        <h1 className="text-[20px]">BlockChainBattles</h1>
        <p className="text-[30px] font-semibold ">
          A place to have fun on blockchain
        </p>
      </div>
      <div className="flex w-[%50]">
        <Image
          alt="game controller"
          src={"/gameController.png"}
          width={250}
          height={150}
          className={`relative left-[1rem] z-10 ${classes.floating1}`}
        />
        <Image
          alt="game controller"
          src={"/eth.png"}
          width={150}
          height={150}
          className={`relative top-[2rem] right-[3rem] ${classes.floating2}`}
        />
      </div>
    </section>
  );
};
export default Landing;
