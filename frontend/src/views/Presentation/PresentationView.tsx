import { Box } from "@mui/system";
import RoomScene from "../../components/RoomScene";
import { ScaleLoader } from "react-spinners";

import React, { Suspense, useEffect, useRef } from "react";
import { fabClasses, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function PresentationView({ loadHandler }: any) {
  const [loading, setLoading] = React.useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // add a 3-second delay
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
    <Box >
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
          <Parallax pages={5}>
            <ParallaxLayer offset={0} speed={0.2} >
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <h1>Welcome 👋</h1>
              </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.2} sticky={{start: 1, end: 5}} >
              <Box sx={{ height: "100%", marginRight: "50%" }}>
                <Spline scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" />
              </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}  sticky={{start: 1.5, end: 2.5}}>
              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30%",
                }}>
                <Typography variant="body1" color="white" sx={{ fontSize: "2em" }}>
                  I am a 20yo devops apprentice from Montpellier france 🇫🇷.
                </Typography>
              </Box>
            </ParallaxLayer>
          </Parallax>
      )}
    </Box>
  );
}
