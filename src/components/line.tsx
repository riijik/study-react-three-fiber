import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export function Line({ showSphere }: { showSphere: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  //   const state = useThree();
  useFrame(
    () => ((ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.02))
  ); //ререндерит изменения нашего 3D объекта
  return (
    <mesh
      ref={ref}
      position={[3.5, 0.1, 0]}
      rotation={[Math.PI / 3, Math.PI / 1.5, 1]} //как повернута наша фигура
      visible={showSphere ? true : false}
    >
      <sphereGeometry args={[1, 3, 12]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
