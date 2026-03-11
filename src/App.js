import GlobeScene from "./components/GlobeScene";
import IntelPanel from "./components/IntelPanel";
import SatellitePanel from "./components/SatellitePanel";
import LiveFeed from "./components/LiveFeed";
import StatusBar from "./components/StatusBar";

import "./App.css";

function App(){

return(

<div>

<GlobeScene/>

<IntelPanel/>
<SatellitePanel/>
<LiveFeed/>
<StatusBar/>

</div>

)

}

export default App;