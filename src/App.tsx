import React, { useState, useRef, Suspense } from "react";
import { render } from "react-dom";
import { Canvas, useLoader } from "react-three-fiber";
import { Box } from "./components/box";
import { Line } from "./components/line";
import style from "./App.css";
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Coin } from "./components/coin";

export function App() {
  const [showSphere, setSowSphere] = useState(false);
  return (
    <Canvas className={style.canvas}>
      <ambientLight intensity={0.5} color="yellow" />
      <pointLight position={[10, 10, 10]} />
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Coin scale={[0.1, 0.1, 0.1]} />
      </Suspense>
    </Canvas>
  );
}

render(<App />, document.body);

{
  /* <div className={style.wrapper}>
      <button onClick={() => setSowSphere(!showSphere)}>
        Press to show sphere
      </button>
      <Canvas className={style.canvas}>
        <ambientLight intensity={0.5} color="black" />
        <pointLight position={[10, 10, 10]} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[0, 1, 0]} />
        <Line showSphere={showSphere} />
      </Canvas>
    </div> */
}
