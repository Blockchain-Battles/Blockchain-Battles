"use client";
import Lock from "@/components/Three/Lock";
import AnimateInChildren from "@/components/ui/AnimateInChildren";
import View from "@/utils/three/View";
import { Button, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const Login = () => {
  return (
    <>
      <AnimateInChildren
        height={600}
        width={500}
        m={5}
        gap={4}
        justifyContent="center"
        sx={{
          pointerEvents: "auto",
        }}
      >
        <Typography variant="h3">Login</Typography>
        <GoogleLogin useOneTap onSuccess={console.log}   />
      </AnimateInChildren>
      <View>
        <Lock />
      </View>
    </>
  );
};

export default Login;
