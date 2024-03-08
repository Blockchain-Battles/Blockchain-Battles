"use client";
import Controller from "@/components/Three/Controller";
import Ethereum from "@/components/Three/Ethereum";
import View from "@/utils/three/View";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  console.log('first')
  return (
    <>
      <div className="pointer-events-auto">home</div>
      <View>
        <Controller />
        <Ethereum />
      </View>
    </>
  );
};

export default Home;
