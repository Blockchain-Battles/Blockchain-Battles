///@ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/ethereum.gltf -t -o src/components/Three/models/Ethereum.tsx 
Author: arthur (https://sketchfab.com/Arthur_mf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ethereum-ac40cebf61464c548776a0c20b47ccc7
Title: Ethereum
*/

import * as THREE from "three";
import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
  };
  materials: {
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export const Model = forwardRef(function Model(
  props: JSX.IntrinsicElements["group"] & {
    color?: "gold" | "silver";
  },
  ref
) {
  const { color = "gold", ...groupProps } = props;
  const { nodes, materials } = useGLTF("/ethereum.gltf") as GLTFResult;
  return (
    <group {...groupProps} ref={ref} dispose={null}>
      {/* golden coin */}
      {color === "gold" && (
        <>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.004"]}
            position={[-0.217, 0, -0.378]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.005"]}
            position={[-0.217, 0, -0.378]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
        </>
      )}
      {/* silver coin */}
      {color === "silver" && (
        <>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.007"]}
            position={[-0.217, 0, -0.378]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.003"]}
            position={[-0.217, 0, -0.378]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
        </>
      )}
    </group>
  );
});

useGLTF.preload("/ethereum.gltf");
