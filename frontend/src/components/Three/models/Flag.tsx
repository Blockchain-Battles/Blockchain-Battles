/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/animated_flag/scene.gltf -o Flag.tsx 
Author: ManySince910 (https://sketchfab.com/noears6)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animated-flag-3aa23ffa68cb4cbba1acfe983f8f4b4c
Title: Animated Flag
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Flag_Pole_Flag_Pole_Mat_0: THREE.Mesh;
    Object_7: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    Flag_Pole_Mat: THREE.MeshStandardMaterial;
    Flag_Mat: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Take 001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    | JSX.IntrinsicElements["mesh"]
    | JSX.IntrinsicElements["skinnedMesh"]
    | JSX.IntrinsicElements["bone"]
  >
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "/animated_flag/scene.gltf"
  ) as unknown as GLTFResult;

  const { clips, mixer } = useAnimations(animations, group);

  useEffect(() => {
    const clip = clips.find((clip) => clip.name === "Take 001");

    if (clip) {
      const action = mixer.clipAction(clip);

      action.play();
    }
    return () => {
      if (clip) {
        const action = mixer.clipAction(clip);
        action.stop();
      }
    };
  }, [clips, mixer]);

  nodes._rootJoint.scale.setZ(2);
  nodes._rootJoint.scale.setY(2);
  nodes._rootJoint.position.setY(-20)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30}
        >
          <group name="Flag_Polefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, 31.142, -7.503]} />
                  <group name="Flag_Pole" scale={[2, 2, 2]}>
                    <mesh
                      name="Flag_Pole_Flag_Pole_Mat_0"
                      geometry={nodes.Flag_Pole_Flag_Pole_Mat_0.geometry}
                      material={materials.Flag_Pole_Mat}
                    />
                  </group>
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Flag_Mat}
                    position={[0, 0, 0]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/animated_flag/scene.gltf");
