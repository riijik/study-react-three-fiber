import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";
import { Box } from "./components/box";
import style from "./App.css"

export function App() {
  return (
    <div>
      <h1>Hi</h1>
      <Canvas className={style.canvas}>
        <ambientLight intensity={0.5} color="black"/>
        <pointLight position={[10, 10, 10]} />
        <directionalLight color="red" position={[0,0,5]}/>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

render(<App />, document.body);
