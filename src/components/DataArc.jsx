import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { latLongToVector3 } from "../utils/latLongToVector3";

export default function DataArc({startLat,startLon,endLat,endLon}){

  const packet = useRef();
  const t = useRef(0);

  const curve = useMemo(()=>{

    const start = latLongToVector3(startLat,startLon,2);
    const end = latLongToVector3(endLat,endLon,2);

    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(4.5);

    return new THREE.QuadraticBezierCurve3(start,mid,end);

  },[startLat,startLon,endLat,endLon]);

  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  useFrame(()=>{

    t.current += 0.002;
    if(t.current>1) t.current = 0;

    const pos = curve.getPoint(t.current);

    if(packet.current){
      packet.current.position.copy(pos);
    }

  });

  return(
    <>
      <line geometry={geometry}>
        <lineBasicMaterial color="#00eaff"/>
      </line>

      <mesh ref={packet}>
        <sphereGeometry args={[0.03,16,16]}/>
        <meshBasicMaterial color="yellow"/>
      </mesh>
    </>
  );
}