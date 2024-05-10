"use client";
import React, { PropsWithChildren, useState } from "react";
import Scene from "../Three/Scene";
import Canvas from "../Three/Canvas";
import clsx from "clsx";
import { FiraCode } from "@/assets/fonts";
import { Box } from "@mui/material";
import HStack from "@/components/ui/HStack";
import NavbarLink from "@/components/ui/NavbarLink";
import Providers from "@/providers/index.provider";
import { AnimatePresence } from "framer-motion";
import Splash from "@/components/layouts/Splash";

type Props = PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleCanvasCreation = () => setShowSplash(false);

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
    {
      content: "Signup",
      route: "/signup",
    },
  ];

  return (
    <>
      <Providers>
        <Canvas onCreated={handleCanvasCreation}>
          <Scene />
        </Canvas>
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
          </HStack>

          <Box component="div" p={2}>
            {children}
          </Box>
        </Box>
      </Providers>
    </>
  );
};

export default RootLayout;
