import Image from "next/image";

type Props = {};
const GameCard = (props: Props) => {
  return (
    <div
      className={`flex h-[300px] w-[200px] flex-col items-center justify-start rounded-[7px] bg-[#fafafa] shadow-md p-[1rem]`}
    >
      <h3 className={`mb-[1rem] text-[20px]`}>GameName</h3>
      <Image
        className={`rounded-[7px]`}
        alt="image"
        src={"/sudoku.png"}
        width={100}
        height={100}
      />
    </div>
  );
};
export default GameCard;
