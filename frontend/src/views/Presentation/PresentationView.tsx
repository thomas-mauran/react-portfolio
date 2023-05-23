import { Box } from "@mui/system";
import RoomScene from "../../components/RoomScene";
import { ScaleLoader } from "react-spinners";

import React, { Suspense, useEffect, useRef } from "react";
import { fabClasses, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function PresentationView({ loadHandler }: any) {
  const [loading, setLoading] = React.useState(true);
  const [assetLoaded, setAssetLoaded] = React.useState([false, false]);

  const firstScene = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("assetLoaded", assetLoaded);
    let allLoaded = true;
    for (let i = 0; i < assetLoaded.length; i++) {
      if (!assetLoaded[i]) {
        allLoaded = false;
      }
    }

    if (allLoaded) {
      console.log("all loaded");
      setLoading(false);
    }
  }, [assetLoaded]);

  function onLoad(event: any) {
    setAssetLoaded((prevState) => {
      const newState = [...prevState];
      newState[event.canvas.id] = true;
      return newState;
    });
  }

  function scrollToFirstBlock() {
    if (firstScene.current) {
      firstScene.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <Box>
      {loading && (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
            position: "fixed",
            backgroundColor: "#1c1826",
          }}>
          <ScaleLoader color="#7b518f" />
        </Box>
      )}
      <Parallax pages={10}>
        <ParallaxLayer offset={0} speed={0.2}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: "1000", marginTop: "-2%" }}>
            <Box sx={{ marginRight: "30%" }} className="titleBox">
              <h1>Welcome to my portfolio 👋</h1>
              <p>Scroll down to learn more about me</p>
              <KeyboardArrowDownIcon sx={{ fontSize: "3em", color: "#FFF" }} className="arrow" onClick={scrollToFirstBlock} />
            </Box>
            <Box sx={{ width: "50%", height: "100%", zIndex: "2", position: "absolute", right: "0" }} className="box3D redBackground">
              <Spline onLoad={(event) => onLoad(event)} id="0" scene="https://prod.spline.design/NNdEJ1ExxMEgxzW0/scene.splinecode" style={{ transform: "scale(0.7)", zIndex: "100" }} />
            </Box>
          </Box>
        </ParallaxLayer>

        {/* My room */}
        <ParallaxLayer offset={1} speed={0.2} sticky={{ start: 1, end: 2 }} style={{ width: "50%" }} className="box3D">
          <Spline ref={firstScene} onLoad={(event) => onLoad(event)} id="1" scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" style={{ transform: "scale(0.8)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "50%" }}>
            <h1>Hi ! My name is Thomas Mauran</h1>
            <img src="https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFgM0p5K6Bj2NmuD8_9ZFClkuWTWgtNXg54TlHXGZjLxbbsm2D1fx4TZH9pSWxfMfA" alt="ghibli gif" className="image" />
            <Box sx={{ textAlign: "left", margin: "20px" }}>
              <Typography variant="subtitle1" color="white" className="paragraph">
                I'm a 20 years old french developper.
              </Typography>
              <Typography variant="subtitle1" color="white" className="paragraph">
                I love computer science and I'm always looking for new challenges.
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* Polytech */}
        <ParallaxLayer offset={3.2} speed={0.2} sticky={{ start: 3.2, end: 4 }} style={{ width: "150%", height: "100%" }} className="box3D">
          <Spline scene="https://prod.spline.design/XJxCkUSpgZWLVVD5/scene.splinecode" style={{ transform: "scale(0.6)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "2%" }}>
            <h1>Education</h1>
            <Box sx={{ textAlign: "left", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="https://www.polytech.umontpellier.fr/images/formation/do/DO-seul.jpg" alt="DO Polytech logo" className="image" style={{ width: "200px", borderRadius: "100%", padding: "-20px" }} />

              <Typography variant="subtitle1" color="white" className="paragraph">
                Currently, I'm an apprentice engineer studying DevOps at Polytech DO. I started in 2022 and will be there until 2025. At Polytech DO, I've been learning both development and operations to get a better understanding of how software
                development and deployment work in real-life scenarios.
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* Frontend */}
        <ParallaxLayer offset={5} speed={0.2} sticky={{ start: 5, end: 6 }} style={{ width: "50%", height: "100%" }} className="box3D blueBackground">
          <Spline scene="https://prod.spline.design/PPW5io9JuCDlXmAk/scene.splinecode" style={{ transform: "scale(1.1)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={5.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "50%", border: "2px solid #50e5db" }}>
            <h1>Web development</h1>
            <img src="https://media.tenor.com/J8o7AxtZiwgAAAAC/www-web.gif" alt="ghibli gif" className="image" />
            <Box sx={{ textAlign: "left", margin: "20px" }}>
              <ul>
                <li>
                  Javascript:
                  <p>
                    I have been using javascript for a long period of time, I started learning it with libraries like <a href="https://p5js.org/">p5js</a>. I often use <a href="https://threejs.org/">ThreeJS</a> to make 3D artwork in the web browser{" "}
                  </p>
                </li>
                <li>
                  Vue js:
                  <p>I mostly use VueJs athttps://github.com/kuzzleio/kuzzle to create a custom like grafana dashboard to retrieve IoT data.</p>
                </li>
                <li>
                  React js:
                  <p>
                    We learned and are still using React a lot at Polytech. I made a lot of project that you can find <a href="https://cluster-2022-6.dopolytech.fr/projects">here</a>
                  </p>
                </li>
              </ul>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* System */}
        <ParallaxLayer offset={7} speed={0.2} sticky={{ start: 7, end: 8 }} style={{ width: "50%", height: "100%", marginLeft: "50vw" }} className="box3D yellowBackground">
          <Spline scene="https://prod.spline.design/M5fU1KjYCuNDmPra/scene.splinecode" style={{ transform: "scale(1)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={7.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "2%", border: "2px solid #5296da" }}>
            <h1>System development</h1>
            <Box sx={{ textAlign: "left", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="https://media.tenor.com/mpW2qB_ufw4AAAAd/ls-command-linux.gif" alt="DO Polytech logo" className="image" style={{ width: "700px", padding: "-20px" }} />

              <ul>
                <li>
                  Golang:
                  <p>
                    I started learning Golang at polytech by making <a href="https://github.com/noetarbouriech/go-jitsu">Go-Jitsu</a>, a remake of the amazing Card-Jitsu game (from club penguin). You can find the rest of my go projects{" "}
                    <a href="https://cluster-2022-6.dopolytech.fr/projects">here</a>
                  </p>
                </li>
                <li>
                  Rust:
                  <p>
                    I love rust and started learning it with amazing courses followed at Polytech, then I started made my first TUI rust game:{" "}
                    <a href="https://github.com/thomas-mauran/tic-tac-toe" target="_blank">
                      tic tac toe
                    </a>{" "}
                  </p>
                </li>
              </ul>
            </Box>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}
