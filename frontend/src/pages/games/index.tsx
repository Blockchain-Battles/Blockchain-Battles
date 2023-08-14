import GameCard from "@/components/games/gameCard/GameCard";
import GamesHeader from "@/components/games/gamesHeader/GamesHeader";
import Head from "next/head";

type Props = {};
const Games = (props: Props) => {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <section className={`min-h-[500px]`}>
        <GamesHeader />
        <div
          className={`flex flex-wrap items-center justify-evenly gap-[2rem]`}
        >
          <GameCard
            imageUrl="/sudoku.png"
            name="sudoku"
            onJoin={() => {
              console.log("first");
            }}
          />
        </div>
      </section>
    </>
  );
};
export default Games;
