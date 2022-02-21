import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import { useBox } from "@react-three/cannon";
import coin from "../model/coin/scene.gltf";
import { useSpring, animated } from "@react-spring/three";
import { colorToRgba } from "@react-spring/shared";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {
    material_0: THREE.MeshStandardMaterial;
  };
};

export function Coin({ ...props }: JSX.IntrinsicElements["group"]) {
  const [trow, setTrow] = useState(false);
  const meshRef = useRef<THREE.Group>();
  const animation: any = useSpring({
    scale: trow ? 2 : 1,
    rotation: trow ? [0, 2, 3] : [2,5, 0, 0],
  });

  const { nodes, materials } = useGLTF(coin) as GLTFResult;
  useEffect(() => {
    if (trow) {
      setTimeout(() => {
        setTrow(false);
      }, 3000);
    }
  }, [trow]);

  // useFrame(() => (meshRef.current.rotation.x += 0.03));

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <animated.mesh
        rotation={animation.rotation}
        scale={animation.scale}
        geometry={nodes.mesh_0.geometry}
        material={materials.material_0}
        onClick={() => {
          setTrow(!trow);
        }}
      />
    </group>
  );
}

// [0, 1.92, -0.46]
