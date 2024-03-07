"use client";
import View from "@/utils/three/View";
import React from "react";
import Controller from "./Controller";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pointer-events-auto">
      <View>
        <Controller />
      </View>
    </div>
  );
};

export default Home;
