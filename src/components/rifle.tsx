import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import rifle from "../model/rifle/scene.gltf";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_4: THREE.Mesh;
    mesh_5: THREE.Mesh;
    mesh_6: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_8: THREE.Mesh;
    mesh_9: THREE.Mesh;
    mesh_10: THREE.Mesh;
    mesh_11: THREE.Mesh;
    mesh_12: THREE.Mesh;
    mesh_13: THREE.Mesh;
    mesh_14: THREE.Mesh;
    mesh_15: THREE.Mesh;
    mesh_16: THREE.Mesh;
    mesh_17: THREE.Mesh;
    mesh_18: THREE.Mesh;
    mesh_19: THREE.Mesh;
    mesh_20: THREE.Mesh;
    mesh_21: THREE.Mesh;
    mesh_22: THREE.Mesh;
    mesh_23: THREE.Mesh;
    mesh_24: THREE.Mesh;
    mesh_25: THREE.Mesh;
    mesh_26: THREE.Mesh;
    mesh_27: THREE.Mesh;
    mesh_28: THREE.Mesh;
    mesh_29: THREE.Mesh;
    mesh_30: THREE.Mesh;
    mesh_31: THREE.Mesh;
    mesh_32: THREE.Mesh;
    mesh_33: THREE.Mesh;
    mesh_34: THREE.Mesh;
    mesh_35: THREE.Mesh;
    mesh_36: THREE.Mesh;
  };
  materials: {
    ["01_-_Default_1"]: THREE.MeshStandardMaterial;
    ["01_-_Default"]: THREE.MeshStandardMaterial;
    ["01_-_Default_5"]: THREE.MeshStandardMaterial;
    ["01_-_Default_8"]: THREE.MeshStandardMaterial;
    ["01_-_Default_6"]: THREE.MeshStandardMaterial;
    ["01_-_Default_4"]: THREE.MeshStandardMaterial;
    ["01_-_Default_21"]: THREE.MeshStandardMaterial;
    ["01_-_Default_13"]: THREE.MeshStandardMaterial;
    ["01_-_Default_15"]: THREE.MeshStandardMaterial;
    ["01_-_Default_19"]: THREE.MeshStandardMaterial;
    ["01_-_Default_2"]: THREE.MeshStandardMaterial;
    ["01_-_Default_7"]: THREE.MeshStandardMaterial;
    ["01_-_Default_9"]: THREE.MeshStandardMaterial;
    ["01_-_Default_14"]: THREE.MeshStandardMaterial;
    ["01_-_Default_11"]: THREE.MeshStandardMaterial;
    ["01_-_Default_10"]: THREE.MeshStandardMaterial;
    ["01_-_Default_20"]: THREE.MeshStandardMaterial;
    ["01_-_Default_23"]: THREE.MeshStandardMaterial;
    ["01_-_Default_17"]: THREE.MeshStandardMaterial;
    ["01_-_Default_25"]: THREE.MeshStandardMaterial;
    ["01_-_Default_3"]: THREE.MeshStandardMaterial;
    Material_82: THREE.MeshStandardMaterial;
    ["01_-_Default_18"]: THREE.MeshStandardMaterial;
    ["01_-_Default_16"]: THREE.MeshStandardMaterial;
    ["01_-_Default_24"]: THREE.MeshStandardMaterial;
  };
};

export function Rifle({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(rifle) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[714.09, 123.16, 14.96]}>
            <mesh
              geometry={nodes.mesh_0.geometry}
              material={materials["01_-_Default_1"]}
            />
          </group>
          <group
            position={[-204.12, 263.45, 0.94]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mesh_1.geometry}
              material={materials["01_-_Default"]}
            />
          </group>
          <group
            position={[-204.54, 263.45, 0.94]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mesh_2.geometry}
              material={materials["01_-_Default_5"]}
            />
          </group>
          <group
            position={[-810.1, 315.01, 1.87]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mesh_3.geometry}
              material={materials["01_-_Default_8"]}
            />
          </group>
          <group position={[-205.21, 263.23, 16.01]}>
            <mesh
              geometry={nodes.mesh_4.geometry}
              material={materials["01_-_Default_6"]}
            />
          </group>
          <group position={[-205.21, 263.36, 15.53]}>
            <mesh
              geometry={nodes.mesh_5.geometry}
              material={materials["01_-_Default_4"]}
            />
          </group>
          <group
            position={[-239.69, 330.64, 49.71]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes.mesh_6.geometry}
              material={materials["01_-_Default_21"]}
            />
          </group>
          <group
            position={[-376.59, 471.43, -1.23]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes.mesh_7.geometry}
              material={materials["01_-_Default_13"]}
            />
          </group>
          <group
            position={[-144.83, 308.97, 44.97]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mesh_8.geometry}
              material={materials["01_-_Default_15"]}
            />
          </group>
          <group
            position={[-105.49, 303.97, 44.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.9, 0.9, 1]}
          >
            <mesh
              geometry={nodes.mesh_9.geometry}
              material={materials["01_-_Default_19"]}
            />
          </group>
          <group
            position={[240.93, 465.93, 0.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.03}
          >
            <mesh
              geometry={nodes.mesh_10.geometry}
              material={materials["01_-_Default_2"]}
            />
          </group>
          <group
            position={[-206.12, 263.54, 2.52]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.mesh_11.geometry}
              material={materials["01_-_Default_7"]}
            />
          </group>
          <group
            position={[-425.39, 358.37, 5.79]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              position={[-155.51, 13.91, 12.89]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                geometry={nodes.mesh_12.geometry}
                material={nodes.mesh_12.material}
              />
            </group>
            <group position={[219.27, 3.83, 4.92]}>
              <mesh
                geometry={nodes.mesh_13.geometry}
                material={materials["01_-_Default_14"]}
              />
            </group>
            <group position={[-58.51, -11.09, -12.76]}>
              <mesh
                geometry={nodes.mesh_14.geometry}
                material={nodes.mesh_14.material}
              />
            </group>
            <group position={[-57.86, 3.44, 2.92]}>
              <mesh
                geometry={nodes.mesh_15.geometry}
                material={materials["01_-_Default_11"]}
              />
            </group>
            <group position={[-102.9, 3.83, 4.92]}>
              <mesh
                geometry={nodes.mesh_16.geometry}
                material={materials["01_-_Default_10"]}
              />
            </group>
          </group>
          <group
            position={[143.77, 342.61, 16.03]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_17.geometry}
              material={materials["01_-_Default_20"]}
            />
          </group>
          <group
            position={[-138.84, 514.47, 20.01]}
            rotation={[-Math.PI / 2, 0, 0.63]}
            scale={2.84}
          >
            <mesh
              geometry={nodes.mesh_18.geometry}
              material={nodes.mesh_18.material}
            />
          </group>
          <group
            position={[686.38, 45.39, 26.72]}
            rotation={[0, 0, 1.54]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_19.geometry}
              material={nodes.mesh_19.material}
            />
          </group>
          <group
            position={[-1150.21, 364.88, 2.63]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_20.geometry}
              material={materials["01_-_Default_25"]}
            />
          </group>
          <group
            position={[-204.76, 261.03, 16.03]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_21.geometry}
              material={materials["01_-_Default_3"]}
            />
          </group>
          <group
            position={[-462.9, 311.29, 2.38]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_22.geometry}
              material={materials.Material_82}
            />
          </group>
          <group
            position={[665.26, 51.57, 26.9]}
            rotation={[Math.PI / 2, -0.35, -0.23]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_23.geometry}
              material={materials["01_-_Default_18"]}
            />
          </group>
          <group position={[656.98, 43.21, 13.7]} scale={2.6}>
            <mesh
              geometry={nodes.mesh_24.geometry}
              material={materials["01_-_Default_16"]}
            />
          </group>
          <group
            position={[644.5, 59.55, 26.72]}
            rotation={[0, 0, 0.47]}
            scale={[2.53, 2.53, 2.53]}
          >
            <mesh
              geometry={nodes.mesh_25.geometry}
              material={nodes.mesh_25.material}
            />
          </group>
          <group
            position={[-138.84, 514.47, -18.9]}
            rotation={[-Math.PI / 2, 0, 1.54]}
            scale={[2.84, 2.84, 2.84]}
          >
            <mesh
              geometry={nodes.mesh_26.geometry}
              material={nodes.mesh_26.material}
            />
          </group>
          <group
            position={[-89.57, 514.47, -18.9]}
            rotation={[-Math.PI / 2, 0, 0.69]}
            scale={2.84}
          >
            <mesh
              geometry={nodes.mesh_27.geometry}
              material={nodes.mesh_27.material}
            />
          </group>
          <group
            position={[-89.57, 514.47, 20.01]}
            rotation={[-Math.PI / 2, 0, 1.84]}
            scale={[2.84, 2.84, 2.84]}
          >
            <mesh
              geometry={nodes.mesh_28.geometry}
              material={nodes.mesh_28.material}
            />
          </group>
          <group
            position={[-141.09, 482.56, -43.06]}
            rotation={[3.14, 0, 2.45]}
            scale={[2.48, 2.48, 2.48]}
          >
            <mesh
              geometry={nodes.mesh_29.geometry}
              material={nodes.mesh_29.material}
            />
          </group>
          <group
            position={[-141.09, 459.79, -43.06]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={2.48}
          >
            <mesh
              geometry={nodes.mesh_30.geometry}
              material={nodes.mesh_30.material}
            />
          </group>
          <group
            position={[-88.57, 459.79, -43.06]}
            rotation={[-3.14, 0, 0.57]}
            scale={[2.48, 2.48, 2.48]}
          >
            <mesh
              geometry={nodes.mesh_31.geometry}
              material={nodes.mesh_31.material}
            />
          </group>
          <group
            position={[-88.57, 482.56, -43.06]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
            scale={2.48}
          >
            <mesh
              geometry={nodes.mesh_32.geometry}
              material={nodes.mesh_32.material}
            />
          </group>
          <group
            position={[7.23, 357.75, 2.29]}
            rotation={[-Math.PI / 2, 0.03, Math.PI / 2]}
            scale={[0.07, 0.22, 0.11]}
          >
            <mesh
              geometry={nodes.mesh_33.geometry}
              material={nodes.mesh_33.material}
            />
          </group>
          <group
            position={[-79.94, 359.25, 2.29]}
            rotation={[-Math.PI / 2, 0.01, Math.PI / 2]}
            scale={[0.07, 0.22, 0.11]}
          >
            <mesh
              geometry={nodes.mesh_34.geometry}
              material={nodes.mesh_34.material}
            />
          </group>
          <group
            position={[-166.79, 359.25, 2.29]}
            rotation={[-Math.PI / 2, 0.01, Math.PI / 2]}
            scale={[0.07, 0.22, 0.11]}
          >
            <mesh
              geometry={nodes.mesh_35.geometry}
              material={nodes.mesh_35.material}
            />
          </group>
          <group
            position={[88.82, 355.91, 2.29]}
            rotation={[-Math.PI / 2, 0.02, Math.PI / 2]}
            scale={[0.07, 0.14, 0.11]}
          >
            <mesh
              geometry={nodes.mesh_36.geometry}
              material={nodes.mesh_36.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
