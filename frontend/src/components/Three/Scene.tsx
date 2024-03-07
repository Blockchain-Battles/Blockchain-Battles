"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/three";
import {
  Box,
  Grid,
  OrbitControls,
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

type Props = {};

const Scene = (props: Props) => {
  const ref = useRef<Mesh>(null!);
  const refLight = useRef<any>(null!);

  const camera = useThree((state) => state.camera);

  const pathname = usePathname();
  
  useFrame(({ clock: { elapsedTime } }, delta) => {
    ref.current.position.setY(Math.sin(elapsedTime * 2) * 2 - 20);
  });

  const [springs, api] = useSpring(() => ({
    from: { rotation: [0, 0, 0], position: [100, -50, -50] },
    config: { mass: 5, tension: 400, friction: 50 },
  }));

  const rotationHandler = useCallback(() => {
    api.start({
      to: {
        rotation: [Math.PI * 2 + springs.rotation.get()[0], 0, 0],
      },
    });
  }, [api, springs]);

  useOnlyEffect(() => {
    rotationHandler();
  }, [pathname]);

  return (
    <>
      <color args={["black"]} attach="background" />
      <directionalLight castShadow position={[0, 300, 0]} intensity={1} />
      <ambientLight color="#eee" />
      {
        ///@ts-ignore
        <animated.group castShadow ref={ref} {...springs}>
          <group position={[0, 50, 0]}>
            <uiTunnle.Out />
          </group>
          <RoundedBox
            radius={10}
            material={new MeshStandardMaterial()}
            receiveShadow
            args={[150, 100, 150]}
            position={[0, 0, 0]}
          />
        </animated.group>
      }
      <OrbitControls />
    </>
  );
};

export default Scene;
