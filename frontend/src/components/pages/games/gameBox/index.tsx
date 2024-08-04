import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
  title: string;
  image: string;
  href: string;
};

const GameBox: FC<Props> = ({ image, title, href }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(href);
  };

  return (
    <Stack
      border="1px solid"
      borderColor="grey.main"
      borderRadius={2}
      width={200}
      p={2}
      alignItems="center"
      component={ButtonBase}
      onClick={clickHandler}
      sx={{
        transition: "all .2s ease",
        "&:hover": {
          scale: "1.02",
        },
      }}
    >
      <Image alt={title} src={image} width={100} height={100} />
      <Typography variant="h6">{title}</Typography>
    </Stack>
  );
};

export default GameBox;
