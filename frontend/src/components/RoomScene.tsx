import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import { Button } from "@mui/material";

export default function RoomScene({loadHandler}: any) {
  const isLooking = () => {
    console.log("test");
  };
  const spline = useRef<any>(null);

    function onLoad(splineApp: any) {
            spline.current = splineApp
            console.log(spline.current)
            loadHandler(false)
          }

      function triggerAnimation(e: any){
        if(!spline.current) return
        const obj = spline.current.findObjectById(e.target.id)

        // objectToAnimate.current.emitEvent('start')
      }


  return (
        <Spline onLoad={onLoad} onMouseUp={(e) => console.log(e)} height={600} scene="https://prod.spline.design/iW1m2qgn3bAmXsas/scene.splinecode" />
  )
}
