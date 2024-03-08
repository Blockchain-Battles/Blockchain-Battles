"use client";
import Lock from "@/components/Three/Lock";
import View from "@/utils/three/View";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <View>
        <Lock />
      </View>
    </>
  );
};

export default Login;
