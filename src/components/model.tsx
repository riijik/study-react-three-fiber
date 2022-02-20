import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import skull from "../model/skull/scene.gltf";
import {useLoader} from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_4: THREE.Mesh;
    mesh_5: THREE.Mesh;
    mesh_6: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
    inner: THREE.MeshStandardMaterial;
  };
};
//вариант через gltfjsx
export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const { nodes, materials } = useGLTF(skull) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-5.49, 1.45, 0.83]} rotation={[-0.09, 0, -0.56]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
          />
          <mesh
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
          />
          <mesh
            geometry={nodes.mesh_2.geometry}
            material={nodes.mesh_2.material}
          />
          <mesh
            geometry={nodes.mesh_3.geometry}
            material={nodes.mesh_3.material}
          />
          <mesh
            geometry={nodes.mesh_4.geometry}
            material={nodes.mesh_4.material}
          />
          <mesh
            geometry={nodes.mesh_5.geometry}
            material={nodes.mesh_5.material}
          />
          <mesh
            geometry={nodes.mesh_6.geometry}
            material={nodes.mesh_6.material}
          />
        </group>
      </group>
    </group>
  );
}

//вариант через useLoader и GLTFLoader
function Skull() {
    const gltf = useLoader(GLTFLoader, skull);
    const ref = useRef(null);
    return <primitive object={gltf.scene} position={[1.2, 0, 0]} scale={5} />;
  }
