import GameCard from "@/features/games/gameCard/GameCard";
import GamesHeader from "@/features/games/gamesHeader/GamesHeader";
import { GetStaticProps } from "next";
import Head from "next/head";
type game = { imagePath: string; title: string; name: string };
type Props = {
  listOfGames: game[];
};
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
          {props.listOfGames.map((game) => (
            <GameCard
              key={game.title}
              imageUrl={game.imagePath}
              name={game.title}
              gameLink={`/games/${game.name}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Games;

export const getStaticProps: GetStaticProps<Props> = () => {
  const listOfGames: game[] = [
    { imagePath: "/sudoku.png", title: "Sudoku", name: "sudoku" },
    { imagePath: "/coinFlip.png", title: "Coin Flip", name: "coinFlip" },
  ];
  return {
    props: {
      listOfGames,
    },
  };
};
