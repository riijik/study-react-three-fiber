import React from "react";
import { usePlane } from "@react-three/cannon";

export function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, -2, -1],
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}
