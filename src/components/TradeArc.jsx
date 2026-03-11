import React, { useMemo } from "react";
import * as THREE from "three";

export default function TradeArc({ start, end }) {

  const curve = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);

    const mid = startVec.clone().add(endVec).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(3);

    return new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
  }, [start, end]);

  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="cyan" linewidth={2} />
    </line>
  );
}