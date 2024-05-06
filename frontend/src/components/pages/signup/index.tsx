"use client";
import Lock from "@/components/Three/Lock";
import View from "@/utils/three/View";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="pointer-events-auto">
      <motion.div >BlockChainBattles</motion.div>
      <View>
        <Lock />
      </View>
    </div>
  );
};

export default Signup;
