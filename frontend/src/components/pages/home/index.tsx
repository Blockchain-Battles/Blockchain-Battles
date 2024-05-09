"use client";
import Controller from "@/components/Three/Controller";
import Ethereum from "@/components/Three/Ethereum";
import CTA from "@/components/pages/home/CTA";
import View from "@/utils/three/View";
import { Box } from "@mui/material";
import { Variants, motion } from "framer-motion";

import React from "react";

const Home = () => {
  return (
    <>
      <CTA />
      <View>
        <Controller />
        <Ethereum position={[10, 20, -10]} rotation={[-Math.PI * 0.5, 0, 0]} />
      </View>
    </>
  );
};

export default Home;
