"use client";
import Lock from "@/components/Three/Lock";
import View from "@/utils/three/View";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
type Props = {};

const Signup = (props: Props) => {
  const [spring, api] = useSpring(() => ({
    from: {
      x: "-100%",
    },
    to: {
      x: "0",
    },
    config: {
      duration: 1500,
    },
  }));

  return (
    <div className="pointer-events-auto">
      <animated.div style={spring}>BlockChainBattles</animated.div>
      <View>
        <Lock />
      </View>
    </div>
  );
};

export default Signup;
