"use client";
import View from "@/utils/three/View";
import { Sphere } from "@react-three/drei";
import { MeshNormalMaterial, MeshStandardMaterial } from "three";

export default function Page() {
  return (
    <>
      <View>
        <Sphere
          args={[50]}
          position={[0, 10, 0]}
          material={new MeshStandardMaterial()}
          castShadow
        />
      </View>
      <div className="pointer-events-auto">
        <button>Click to Flip</button>
      </div>
    </>
  );
}
