import { Box } from "@mui/system";
import RoomScene from "../../components/RoomScene";
import { ScaleLoader } from "react-spinners";

import React, { Suspense, useEffect, useRef } from "react";
import { fabClasses, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import "./style.css";

export default function PresentationView({ loadHandler }: any) {
  const [loading, setLoading] = React.useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000); // add a 3-second delay
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ScaleLoader color="#7b518f" />
        </Box>
      ) : (
        <Parallax pages={10}>
          <ParallaxLayer offset={0} speed={0.2}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: "1000", marginTop: "-5%" }}>
              <Box sx={{marginRight: "30%"}}>
              <h1>Welcome to my portfolio 👋</h1>
              <p>My name is thomas, I'm a 20 years old french developper</p>

              </Box>
              <Box sx={{ width: "50%", height: "100%", zIndex: "2", position: "absolute", right: "0", }}  className="blueBackground">
                <Spline scene="https://prod.spline.design/NNdEJ1ExxMEgxzW0/scene.splinecode" style={{ transform: "scale(0.7)", zIndex: "100" }} />
              </Box>
            </Box>
          </ParallaxLayer>


          {/* My room */}
          <ParallaxLayer offset={1} speed={0.2} sticky={{ start: 1, end: 2 }} style={{ marginRight: "40%", width: "60%" }} className="boxTitle">
            <Spline scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" style={{ transform: "scale(1.3)" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.2}>
            <Box className="textBox" sx={{ marginLeft: "50%" }}>
              <h1 style={{ fontSize: "2em", padding: "20px", color: "white", margin: "10px 0" }}>Hi ! My name is Thomas Mauran</h1>
              <img src="https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFgM0p5K6Bj2NmuD8_9ZFClkuWTWgtNXg54TlHXGZjLxbbsm2D1fx4TZH9pSWxfMfA" alt="ghibli gif" className="image" />
              <Box sx={{textAlign: "left", margin: "20px"}}>
              <Typography variant="subtitle1" color="white" sx={{fontSize: "1.5em", margin: "50px 0px"}}>
                I'm a 20 years old french developper.
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{fontSize: "1.5em", margin: "50px 0px"}}>
                I love computer science and I'm always looking for new challenges.
              </Typography>
              </Box>
            </Box>
          </ParallaxLayer>
          {/* Polytech */}

          <ParallaxLayer offset={3.9} speed={0.2} sticky={{ start: 3.9, end: 5 }} style={{width: "150%", height: "100%"}} className="boxTitle">
            <Spline scene="https://prod.spline.design/XJxCkUSpgZWLVVD5/scene.splinecode" style={{ transform: "scale(0.6)" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={4.2} speed={0.2}>
            <Box className="textBox" sx={{ marginRight: "50%" }}>
              <h1 style={{ fontSize: "2em", padding: "20px", color: "white", margin: "10px 0" }}>Study</h1>
              <img src="https://media.tenor.com/XryMPGLSHNEAAAAC/polytech-montpellier.gif" alt="polytech gif" className="image" />
              <Box sx={{textAlign: "left", margin: "20px"}}>
              <Typography variant="subtitle1" color="white" sx={{fontSize: "1.5em", margin: "50px 0px"}}>
                I'm a 20 years old french developper, I'm currently studying at Polytech Montpellier DO (Developpement et exploitation Opérationelle).
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{fontSize: "1.5em", margin: "50px 0px"}}>
                I love computer science and I'm always looking for new challenges.
              </Typography>
              </Box>
            </Box>
          </ParallaxLayer>
        </Parallax>
      )}
    </Box>
  );
}
