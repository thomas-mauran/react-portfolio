import { Box } from "@mui/system";
import RoomScene from "../../components/RoomScene";

import { useRef } from "react";

export default function PresentationView({loadHandler}) {

  return (
    <Box>
      <RoomScene loadHandler={loadHandler}/>
      </Box>
  );
}
