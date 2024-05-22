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
import RainbowProvider from "@/providers/rainbow.provider";
import ConnectButton from "@/components/ui/ConnectButton";
import RootLayoutMainContent from "@/components/layouts/RootLayoutMainContent";

type Props = PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleCanvasCreation = () => setShowSplash(false);

  return (
    <>
      <Providers>
        <Canvas onCreated={handleCanvasCreation}>
          <Scene />
        </Canvas>
        <RootLayoutMainContent showSplash={showSplash}>
          {children}
        </RootLayoutMainContent>
      </Providers>
    </>
  );
};

export default RootLayout;
