"use client";
import useOnlyEffect from "@/hooks/useOnlyEffect";
import { uiTunnle } from "@/utils/three/tunnle";
import { useSpring, animated } from "@react-spring/three";
import { Grid, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { AgXToneMapping, Group } from "three";
import Scene from "../Three/Scene";
import Canvas from "../Three/Canvas";
import clsx from "clsx";
import { FiraCode } from "@/assets/fonts";
import { Box } from "@mui/material";
import HStack from "@/components/ui/HStack";
import NavbarLink from "@/components/ui/NavbarLink";
import Providers from "@/providers/index.provider";

type Props = PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  return (
    <Providers>
      <Canvas>
        <Scene />
      </Canvas>
      <Box
        component="div"
        className={clsx(
          "absolute text-white font-sans pointer-events-none select-none inset-0",
          FiraCode.className
        )}
      >
        <HStack fontSize={20} p={2} gap={2} sx={{ pointerEvents: "auto" }}>
          <NavbarLink href="/">BlockChainBattles</NavbarLink>
          <NavbarLink href="/login">Login</NavbarLink>
          <NavbarLink href="/signup">Signup</NavbarLink>
        </HStack>
        <Box component="div" p={2}>{children}</Box>
      </Box>
    </Providers>
  );
};

export default RootLayout;
