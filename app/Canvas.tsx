"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Statue";

function R3fCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight />
      <Mesh />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={10}
      />
    </Canvas>
  );
}

export default R3fCanvas;

const Mesh = () => {
  return <Model />;
};
