import { Box } from "@mui/system";
import RoomScene from "../../components/RoomScene";
import { ScaleLoader } from "react-spinners";

import React, { Suspense, useEffect, useRef } from "react";
import { fabClasses, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import "./style.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: "1000", marginTop: "-2%" }} >
              <Box sx={{ marginRight: "30%" }} className="titleBox">
                <h1>Welcome to my portfolio 👋</h1>
                <p>Scroll down to learn more about me</p>
                <KeyboardArrowDownIcon sx={{ fontSize: "3em", color: "#FFF" }} className="arrow" />
              </Box>
              <Box sx={{ width: "50%", height: "100%", zIndex: "2", position: "absolute", right: "0" }} className="box3D redBackground">
                <Spline scene="https://prod.spline.design/NNdEJ1ExxMEgxzW0/scene.splinecode" style={{ transform: "scale(0.7)", zIndex: "100" }} />
              </Box>
            </Box>
          </ParallaxLayer>

          {/* My room */}
          <ParallaxLayer offset={1} speed={0.2} sticky={{ start: 1, end: 2 }} style={{ marginRight: "40%", width: "60%" }} className="box3D">
            <Spline scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" style={{ transform: "scale(1.3)" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.2}>
            <Box className="textBox" sx={{ marginLeft: "50%" }}>
              <h1 style={{ fontSize: "2em", padding: "20px", color: "white", margin: "10px 0" }}>Hi ! My name is Thomas Mauran</h1>
              <img src="https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFgM0p5K6Bj2NmuD8_9ZFClkuWTWgtNXg54TlHXGZjLxbbsm2D1fx4TZH9pSWxfMfA" alt="ghibli gif" className="image" />
              <Box sx={{ textAlign: "left", margin: "20px" }}>
                <Typography variant="subtitle1" color="white" sx={{ fontSize: "1.5em", margin: "50px 0px" }}>
                  I'm a 20 years old french developper.
                </Typography>
                <Typography variant="subtitle1" color="white" sx={{ fontSize: "1.5em", margin: "50px 0px" }}>
                  I love computer science and I'm always looking for new challenges.
                </Typography>
              </Box>
            </Box>
          </ParallaxLayer>

          {/* Polytech */}
          <ParallaxLayer offset={3.6} speed={0.2} sticky={{ start: 3.6, end: 4.3 }} style={{ width: "150%", height: "100%" }} className="box3D">
            <Spline scene="https://prod.spline.design/XJxCkUSpgZWLVVD5/scene.splinecode" style={{ transform: "scale(0.6)" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={4.2} speed={0.2}>
            <Box className="textBox" sx={{ marginLeft: "2%" }}>
              <h1 style={{ fontSize: "2em", padding: "20px", color: "white", margin: "10px 0" }}>Education</h1>
              <Box sx={{ textAlign: "left", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="https://www.polytech.umontpellier.fr/images/formation/do/DO-seul.jpg" alt="DO Polytech logo" className="image" style={{ width: "200px" }} />

                <Typography variant="subtitle1" color="white" sx={{ fontSize: "1.5em", margin: "50px 0px" }}>
                  Currently, I'm an apprentice engineer studying DevOps at Polytech DO. I started in 2022 and will be there until 2025. At Polytech DO, I've been learning both development and operations to get a better understanding of how software
                  development and deployment work in real-life scenarios. 
                </Typography>
              </Box>
            </Box>
          </ParallaxLayer>


          {/* Kuzzle */}
          <ParallaxLayer offset={3.6} speed={0.2} sticky={{ start: 3.6, end: 4.3 }} style={{ width: "150%", height: "100%" }} className="box3D">
            <Spline scene="https://prod.spline.design/XJxCkUSpgZWLVVD5/scene.splinecode" style={{ transform: "scale(0.6)" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={4.2} speed={0.2}>
            <Box className="textBox" sx={{ marginLeft: "2%" }}>
              <h1 style={{ fontSize: "2em", padding: "20px", color: "white", margin: "10px 0" }}>Education</h1>
              <Box sx={{ textAlign: "left", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="https://www.polytech.umontpellier.fr/images/formation/do/DO-seul.jpg" alt="DO Polytech logo" className="image" style={{ width: "200px" }} />

                <Typography variant="subtitle1" color="white" sx={{ fontSize: "1.5em", margin: "50px 0px" }}>
                  Currently, I'm an apprentice engineer studying DevOps at Polytech DO. I started in 2022 and will be there until 2025. At Polytech DO, I've been learning both development and operations to get a better understanding of how software
                  development and deployment work in real-life scenarios. 
                </Typography>
              </Box>
            </Box>
          </ParallaxLayer>
        </Parallax>
      )}
    </Box>
  );
}
