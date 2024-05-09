"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/three";
import {
  Box,
  Environment,
  Grid,
  OrbitControls,
  Preload,
  RoundedBox,
  useHelper,
} from "@react-three/drei";
import { uiTunnle } from "@/utils/three/tunnle";
import { usePathname } from "next/navigation";
import useOnlyEffect from "@/hooks/useOnlyEffect";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { useFrame, useThree } from "@react-three/fiber";
import {
  DirectionalLight,
  DirectionalLightHelper,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
} from "three";
import BaseBox from "./BaseBox";

type Props = {};

const Scene = (props: Props) => {
  const ref = useRef<Mesh>(null!);
  const rotationCounts = useRef(0);
  const refLight = useRef<any>(null!);

  const camera = useThree((state) => state.camera);

  const pathname = usePathname();

  useFrame(({ clock: { elapsedTime } }, delta) => {
    ref.current.position.setY(Math.sin(elapsedTime * 2) * 2 - 50);
  });

  const [springs, api] = useSpring(() => ({
    from: { rotation: [0, 0, 0], position: [100, -100, -50] },
    config: { mass: 5, tension: 400, friction: 50 },
  }));

  const rotationHandler = useCallback(() => {
    rotationCounts.current++;
    api.start({
      to: {
        rotation: [Math.PI * 2 * rotationCounts.current, 0, 0],
      },
    });
  }, [api]);

  useOnlyEffect(() => {
    rotationHandler();
  }, [pathname]);

  return (
    <>
      <color args={["black"]} attach="background" />
      <directionalLight castShadow position={[0, 300, 0]} intensity={1} />
      <ambientLight color="#a5a5a5" intensity={3} />
      {
        ///@ts-ignore
        <animated.group castShadow ref={ref} {...springs}>
          <group position={[0, 50, 0]}>
            <uiTunnle.Out />
          </group>
          <BaseBox />
        </animated.group>
      }
      <Preload all />
      {/* <axesHelper args={[500]} />
      <gridHelper args={[200, 200, 200]} /> */}
      <OrbitControls enabled={true} />
    </>
  );
};

export default Scene;
