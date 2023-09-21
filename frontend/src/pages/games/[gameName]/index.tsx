import GameLayout from "@features/games/game/GameLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
interface Props {
  title?: string;
}
const Game = (props: Props) => {
  const { title = "Game" } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GameLayout />
    </>
  );
};
export default Game;

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  return {
    props: {
      title: params?.gameName as string,
    },
  };
};
export const getStaticPaths: GetStaticPaths = (context) => {
  return {
    fallback: "blocking",
    paths: [],
  };
};
