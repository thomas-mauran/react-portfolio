import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import { Button } from "@mui/material";

export default function RoomScene({loadHandler}) {
  const isLooking = () => {
    console.log("test");
  };
  const spline = useRef();

    function onLoad(splineApp) {
            spline.current = splineApp
            console.log(spline.current)
            loadHandler(false)
          }

      function triggerAnimation(e){
        const obj = spline.current.findObjectById(e.target.id)
        console.log(obj) // it has position, parent ecc..
        console.log('test')
        // objectToAnimate.current.emitEvent('start')
      }


  return (
        <Spline onLoad={onLoad} onMouseUp={(e) => console.log(e)} height={600} scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" />
  )
}
