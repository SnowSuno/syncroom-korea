import React, { useMemo } from "react";

// import {BrowserView, MobileView} from "react-device-detect";

import Header from "../components/Header";
import RoomGrid from "../components/RoomGrid";
import Footer from "../components/Footer";

import { useRooms } from "@/api/hooks/rooms";
import { filterRooms } from "@/utils/filter";
import { useFilter } from "@/common/hooks/useFilter";

// temp
// import BetaNotiModal from "../components/temp/BetaNotiModal";

function Home() {
  const { data } = useRooms();
  const filter = useFilter();

  const filteredRooms = useMemo(
    () => data && filterRooms(data.rooms, filter),
    [data?.rooms, filter],
  );

  return (
    <>
      <Header />
      <RoomGrid rooms={filteredRooms ?? []} />
      <Footer />

      {/*temp*/}
      {/*<BetaNotiModal />*/}
    </>
  );
}

export default Home;
