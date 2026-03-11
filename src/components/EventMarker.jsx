import React from "react";
import { Html } from "@react-three/drei";

export default function EventMarker({ position, label }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial color="red" />

      <Html distanceFactor={10}>
        <div className="marker">
          {label}
        </div>
      </Html>
    </mesh>
  );
}