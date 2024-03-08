import Signup from "@/components/pages/signup";
import View from "@/utils/three/View";
import { Sphere } from "@react-three/drei";
import { Metadata } from "next";
import { MeshNormalMaterial, MeshStandardMaterial } from "three";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Page() {
  return (
    <>
      <Signup />
    </>
  );
}
