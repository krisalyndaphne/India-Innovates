import { useTexture } from "@react-three/drei";
import * as THREE from "three";
export default function EarthModel(){

  const texture = useTexture("/textures/earth_night.jpg");

  return (
    <group>

      <mesh>
        <sphereGeometry args={[2,64,64]} />
        <meshPhongMaterial map={texture}/>
      </mesh>

      {/* Atmosphere Glow */}
<meshBasicMaterial
  color="#4fc3ff"
  transparent
  opacity={0.15}
  blending={THREE.AdditiveBlending}
  side={THREE.BackSide}
/>

    </group>
  );
}