import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { latLongToVector3 } from "../utils/latLongToVector3";

export default function ConnectionNode({lat,lon}){

  const ref = useRef();
  const pos = latLongToVector3(lat,lon,2);

  let scale = 1;

  useFrame(()=>{
    scale += 0.02;
    if(scale>1.5) scale=1;
    ref.current.scale.set(scale,scale,scale);
  });

  return(
    <mesh ref={ref} position={[pos.x,pos.y,pos.z]}>
      <sphereGeometry args={[0.05,16,16]}/>
      <meshBasicMaterial color="yellow"/>
    </mesh>
  )
}