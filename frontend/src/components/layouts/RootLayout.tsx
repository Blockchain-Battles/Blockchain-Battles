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

type Props = PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
      <div
        className={clsx(
          "absolute text-white font-sans pointer-events-none select-none inset-0",
          FiraCode.className
        )}
      >
        <div style={{ display: "flex", gap: "1rem", pointerEvents: "auto" }}>
          <Link href="/login">login</Link>
          <Link href="/?name=soroush">HomeQuery</Link>
          <Link href="/signup">signup</Link>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
