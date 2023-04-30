import { useState } from "react";
import "./App.css";

import IntroView from "./views/Intro/IntroView";
// import Presentation from "./views/Presentation/PresentationView";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { ScaleLoader } from "react-spinners";

function App() {

  const [loading, setLoading] = useState(true)



  return (
    <>
    {loading && <ScaleLoader color="#7b518f" />}
    {
    <div className="App">
      
      <Parallax pages={2}>
        {/* Introduction */}
        <ParallaxLayer>
          <IntroView />
        </ParallaxLayer>

        {/* Presentation  */}
        <ParallaxLayer offset={1}>
          {/* <Presentation loadHandler={setLoading}/> */}
        </ParallaxLayer>
      </Parallax>
    </div>
    }
    </>
  );
}

export default App;
