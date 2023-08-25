import { useRouter } from "next/router";

type Props = {};
const GameLayout = (props: Props) => {
  const router = useRouter();
  const { gameName } = router.query;
  return <div>{gameName}</div>;
};
export default GameLayout;
