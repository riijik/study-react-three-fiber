import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "react-three-fiber";
import coin from "../model/coin/scene.gltf";

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
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(coin) as GLTFResult;
  useEffect(() => {
    if (trow) {
      setTimeout(() => {
        setTrow(false);
      }, 3000);
    }
  }, [trow]);
  console.log(trow);
  //   useFrame(
  //     () => ((group.current.rotation.x += 0.01))
  //   );
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[10, 10, 0]} rotation={[1.56, 0, 0]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials.material_0}
            onClick={() => {
              setTrow(!trow);
            }}
          />
        </group>
      </group>
    </group>
  );
}

// [0, 1.92, -0.46]
