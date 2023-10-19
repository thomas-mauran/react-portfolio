import { Box } from "@mui/system";
import { ScaleLoader } from "react-spinners";

import React, { Suspense, useEffect, useRef } from "react";
import { Button, fabClasses, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

export default function PresentationView({ loadHandler }: any) {
  const [loading, setLoading] = React.useState(true);
  const [assetLoaded, setAssetLoaded] = React.useState([false]);

  const firstScene = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let allLoaded = true;
    for (let i = 0; i < assetLoaded.length; i++) {
      if (!assetLoaded[i]) {
        allLoaded = false;
      }
    }

    if (allLoaded) {
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
    <Box sx={{ overflow: "hidden" }}>
      {" "}
      {loading && (
        <Box className="loaderBox">
          <ScaleLoader color="#7b518f" />
        </Box>
      )}
      <Parallax pages={15}>
        <ParallaxLayer offset={0} speed={0.2}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: "1000", marginTop: "-2%" }}>
            <Box sx={{ marginRight: "30%" }} className="titleBox">
              <Box sx={{ marginBottom: "20px", marginRight: "30%", width: "100%", display: "flex" }}>
                <Typography variant="h2" margin="7px" fontWeight={"bold"}>
                  Welcome to my
                </Typography>
                <Typography
                  variant="h2"
                  margin="7px"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(135deg, #fce0e0 0%, #db8080 0%, #e84848 100%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}>
                  portfolio
                </Typography>
                <Typography variant="h2" margin="7px" fontWeight={"bold"}>
                  👋
                </Typography>
              </Box>
              <p>Scroll to learn more about me</p>
              <KeyboardArrowDownIcon sx={{ fontSize: "3em", color: "#FFF" }} className="arrow" onClick={scrollToFirstBlock} />
            </Box>
            <Box sx={{ width: "60%", marginLeft: "70vw", height: "100%", zIndex: "2", position: "absolute", right: "0", cursor: "pointer" }} className="box3D redBackground">
              <Spline
                onLoad={(event) => onLoad(event)}
                id="0"
                scene="https://prod.spline.design/NNdEJ1ExxMEgxzW0/scene.splinecode"
                style={{ transform: "scale(0.6)", zIndex: "100", marginLeft: "20%" }}
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/@43.6308396,3.8610197,3a,75y,29.56h,84.33t/data=!3m7!1e1!3m5!1svT7YA6fn29govRgXsvZt5A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DvT7YA6fn29govRgXsvZt5A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D109.92761%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu",
                    "_blank"
                  );
                }}
              />
            </Box>
          </Box>
        </ParallaxLayer>
        {/* My room */}
        <ParallaxLayer onLoad={(event) => onLoad(event)} id="1" offset={1} speed={0.2} sticky={{ start: 1, end: 2.5 }} style={{ width: "50%", marginRight: "200px", position: "absolute", zIndex: "100" }} className="box3D">
          <Spline ref={firstScene} scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" style={{ transform: "scale(0.7)" }} />
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
                I love computer science and I'm always looking for new challenges. Currently, I'm an apprentice engineer studying DevOps at Polytech DO. I started in 2022 and will be there until 2025. At Polytech DO, I've been learning both
                development and operations to get a better understanding of how software development and deployment work in real-life scenarios.
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>
        {/* System */}
        <ParallaxLayer offset={4} speed={0.2} sticky={{ start: 4, end: 5 }} style={{ width: "100%", height: "100%", marginLeft: "20vw", zIndex: "-100" }} className="box3D yellowBackground">
          <Spline scene="https://prod.spline.design/M5fU1KjYCuNDmPra/scene.splinecode" style={{ transform: "scale(0.8)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "2%", border: "2px solid #5296da" }}>
            <h1>System development</h1>
            <Box sx={{ textAlign: "left", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="https://media.tenor.com/mpW2qB_ufw4AAAAd/ls-command-linux.gif" alt="DO Polytech logo" className="image" style={{ width: "700px", padding: "-20px" }} />

              <ul>
                <li>
                  Golang:
                  <p>
                    I started learning Golang at polytech by making{" "}
                    <a href="https://github.com/noetarbouriech/go-jitsu" target="_blank" rel="noopener noreferrer">
                      Go-Jitsu
                    </a>
                    , a remake of the amazing Card-Jitsu game (from club penguin). You can find the rest of my go projects{" "}
                    <a href="/projects" target="_blank" rel="noopener noreferrer">
                      here
                    </a>
                  </p>
                </li>
                <li>
                  Rust:
                  <p>
                    I love rust and started learning it with amazing courses followed at Polytech, then I started made my first TUI rust game:{" "}
                    <a href="https://github.com/thomas-mauran/tic-tac-toe" target="_blank" rel="noopener noreferrer">
                      tic tac toe
                    </a>{" "}
                  </p>
                </li>
              </ul>
            </Box>
          </Box>
        </ParallaxLayer>
        {/* Frontend */}
        <ParallaxLayer offset={6} speed={0.2} sticky={{ start: 6, end: 7 }} style={{ width: "50%", height: "100%" }} className="box3D blueBackground">
          <Spline scene="https://prod.spline.design/PPW5io9JuCDlXmAk/scene.splinecode" style={{ transform: "scale(0.9)" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={6.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "50%", border: "2px solid #50e5db" }}>
            <h1>Web development</h1>
            <img src="https://media.tenor.com/J8o7AxtZiwgAAAAC/www-web.gif" alt="ghibli gif" className="image" />
            <Box sx={{ textAlign: "left", margin: "20px" }}>
              <ul>
                <li>
                  Javascript:
                  <p>
                    I have been using javascript for a long period of time, I started learning it with libraries like{" "}
                    <a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">
                      p5js
                    </a>
                    . I often use{" "}
                    <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
                      ThreeJS
                    </a>{" "}
                    to make 3D artwork in the web browser{" "}
                  </p>
                </li>
                <li>
                  Vue js:
                  <p>
                    I mostly use VueJs at{" "}
                    <a href="https://github.com/kuzzleio/kuzzle" target="_blank" rel="noopener noreferrer">
                      Kuzzle
                    </a>{" "}
                    to create a custom like grafana dashboard to retrieve IoT data.
                  </p>
                </li>
                <li>
                  React js:
                  <p>
                    We learned and are still using React a lot at Polytech. I made a lot of project that you can find{" "}
                    <a href="/projects" target="_blank" rel="noopener noreferrer">
                      here
                    </a>
                  </p>
                </li>
              </ul>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* Ops */}
        <ParallaxLayer offset={8.5} speed={0.2}>
          <Box className="textBox" sx={{ marginLeft: "2%", border: "2px solid #426ee5" }}>
            <h1>Ops</h1>
            <img src="https://www.inovex.de/wp-content/uploads/2020/05/kubernetes-testing.gif" alt="Ops gif" className="image" style={{ width: "300px" }} />
            <Box sx={{ textAlign: "left", margin: "20px" }}>
              <ul>
                <li>
                  Kubernetes:
                  <p>Kubernetes is great, we managed to deploy a shared clusted among our servers with 2 of my friends, forcing us to learn helm charts, deployments, services pods, HPA etc. </p>
                </li>
                <li>
                  Docker:
                  <p>
                    I use docker a lot, available{" "}
                    <a href="https://hub.docker.com/u/thomasmauran" target="_blank" rel="noopener noreferrer">
                      here
                    </a>{" "}
                    they are mostly used for my project and generated by github actions.
                  </p>
                </li>
                <li>
                  Grafana:
                  <p>Grafana is a great monitoring tool, I learned how to setup a custom grafana for our cluster and how to create dashboards to monitor our servers and pods activies over time</p>
                </li>
              </ul>
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0.2} sticky={{ start: 8, end: 9 }} style={{ width: "100%", height: "100%", marginLeft: "25vw", zIndex: "100" }} className="box3D darkBlueBackground">
          <Spline scene="https://prod.spline.design/OTjPQzdcOju7NHOj/scene.splinecode" style={{ transform: "scale(0.7)" }} />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}
