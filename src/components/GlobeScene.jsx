import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthModel from "./EarthModel";
import Lighting from "./Lighting";
import DataArc from "./DataArc";
import Satellite from "./Satellite";
import ConnectionNode from "./ConnectionNode";

export default function GlobeScene() {

  return (

    <Canvas
      style={{ height:"100vh", width:"100vw"}}
      camera={{ position:[0,0,10], fov:45 }}
    >

      <Lighting/>

      <fog attach="fog" args={["#020412",6,20]} />

      <Stars radius={100} depth={50} count={5000} factor={4}/>

      <EarthModel/>

      {/* GLOBAL DATA HUBS */}

      <ConnectionNode lat={28.6139} lon={77.2090}/>
      <ConnectionNode lat={25.2048} lon={55.2708}/>
      <ConnectionNode lat={1.3521} lon={103.8198}/>
      <ConnectionNode lat={35.6895} lon={139.6917}/>
      <ConnectionNode lat={51.5072} lon={-0.1276}/>
      <ConnectionNode lat={40.7128} lon={-74.0060}/>

      {/* GLOBAL CONNECTION ARCS */}

      <DataArc startLat={28.6139} startLon={77.2090} endLat={25.2048} endLon={55.2708}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={1.3521} endLon={103.8198}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={35.6895} endLon={139.6917}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={51.5072} endLon={-0.1276}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={40.7128} endLon={-74.0060}/>
      <DataArc startLat={19.0760} startLon={72.8777} endLat={48.8566} endLon={2.3522}/>
      <DataArc startLat={13.0827} startLon={80.2707} endLat={30.0444} endLon={31.2357}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={55.7558} endLon={37.6173}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={-33.8688} endLon={151.2093}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={37.7749} endLon={-122.4194}/>
      <DataArc startLat={28.6139} startLon={77.2090} endLat={55.7558} endLon={37.6173}/>
<DataArc startLat={28.6139} startLon={77.2090} endLat={48.8566} endLon={2.3522}/>
<DataArc startLat={28.6139} startLon={77.2090} endLat={34.0522} endLon={-118.2437}/>
<DataArc startLat={28.6139} startLon={77.2090} endLat={52.5200} endLon={13.4050}/>
<DataArc startLat={28.6139} startLon={77.2090} endLat={41.9028} endLon={12.4964}/>

      {/* SATELLITES */}

      <Satellite radius={4.2} speed={0.0015} offset={0} />
<Satellite radius={5.2} speed={0.0012} offset={2} />
<Satellite radius={6.2} speed={0.001} offset={4} />

      <OrbitControls
        makeDefault
        target={[0,0,0]}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />

    </Canvas>

  );

}