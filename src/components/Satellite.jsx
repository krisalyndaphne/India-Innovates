import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Satellite({ radius = 5, speed = 0.002, offset = 0 }) {

  const ref = useRef();
  const angle = useRef(offset);   // keeps angle persistent

  const { scene } = useGLTF("/models/satellite.glb");

  useFrame(() => {

    angle.current += speed;

    const x = Math.cos(angle.current) * radius;
    const z = Math.sin(angle.current) * radius;

    // tilted orbit
    const y = Math.sin(angle.current * 0.3) * 1.5;

    if (ref.current) {

      ref.current.position.set(x, y, z);

      // rotate satellite slowly
      ref.current.rotation.y += 0.01;
    }

  });

  return (
    <primitive
      ref={ref}
      object={scene.clone()}
      scale={0.25}
    />
  );
}