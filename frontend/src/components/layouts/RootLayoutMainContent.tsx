import { FiraCode } from "@/assets/fonts";
import Splash from "@/components/layouts/Splash";
import ConnectButton from "@/components/ui/ConnectButton";
import HStack from "@/components/ui/HStack";
import NavbarLink from "@/components/ui/NavbarLink";
import RainbowProvider from "@/providers/rainbow.provider";
import { Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

type Props = {
  showSplash: boolean;
};

const RootLayoutMainContent: FC<PropsWithChildren<Props>> = ({
  children,
  showSplash,
}) => {
  const routes: { route: string; content: string }[] = [
    {
      content: "BlockChainBattles",
      route: "/",
    },
    {
      content: "Games",
      route: "/games",
    },
    {
      content: "Login",
      route: "/login",
    },
    // {
    //   content: "Signup",
    //   route: "/signup",
    // },
  ];
  return (
    <RainbowProvider>
      <Box
        component="div"
        className={clsx(
          "absolute text-white font-sans pointer-events-none select-none inset-0",
          FiraCode.className
        )}
      >
        <Splash show={showSplash} />

        <HStack p={4} gap={2} sx={{ pointerEvents: "auto" }}>
          {routes.map(({ content, route }) => (
            <NavbarLink href={route} key={route}>
              {content}
            </NavbarLink>
          ))}
          <HStack
            component="div"
            alignItems="center"
            ml="auto"
            gap={1}
            height="50px"
          >
            <GoogleLogin onSuccess={console.log} text="signin" />
            <ConnectButton />
          </HStack>
        </HStack>

        <Box component="div" p={2}>
          {children}
        </Box>
      </Box>
    </RainbowProvider>
  );
};

export default RootLayoutMainContent;
