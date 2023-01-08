import React, { useEffect, useRef } from "react";

// import {BrowserView, MobileView} from "react-device-detect";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";

// import Header from "../components.old/Header";
import Footer from "../components.old/Footer";

import { getRoomsThunk } from "../modules/syncroom";

// import { roomFilter } from "../common/util/roomFilter";
import { Card, Grid } from "../components";
import { getRoomId } from "../common/api/interfaces";

// temp
// import BetaNotiModal from "../components.old/temp/BetaNotiModal";

function Home() {
  const rooms = useSelector((state: RootState) => state.syncroom.rooms);
  // const { search, country, inst, status } = useSelector(
  //   (state: RootState) => state.filter);
  
  const dispatch = useDispatch();
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const getRooms = () => {
      dispatch(getRoomsThunk());
      timer.current = setTimeout(getRooms, 5000);
    };
    getRooms();
    return () => {
      const handle = timer.current as unknown as number;
      clearTimeout(handle);
    };
  }, [dispatch]);
  
  // const visibleData = useMemo(() => rooms.filter(
  //   roomFilter(search, country, inst, status),
  // ), [rooms, search, country, inst, status]);
  
  return (
    <>
      {/*<Header/>*/}
      {/*<RoomGrid rooms={visibleData}/>*/}
      
      <Grid>
        {rooms.map(room =>
          <Card key={getRoomId(room)} room={room}/>
        )}
      </Grid>
      <Footer/>
      
      {/*temp*/}
      {/*<BetaNotiModal />*/}
    </>
  );
}

export default Home;
