import React, { useMemo } from "react";

// import {BrowserView, MobileView} from "react-device-detect";

// import Header from "components/Header";
import RoomGrid from "@/components/RoomGrid";

import { useRooms } from "@/api/hooks/rooms";
import { filterRooms } from "@/utils/filter";
import { useFilter } from "@/common/hooks/useFilter";

import { ScrollArea } from "@/components/ui/scroll-area";

// temp
// import BetaNotiModal from "../components/temp/BetaNotiModal";

export const Home: React.FC = () => {
  const { data } = useRooms();
  const filter = useFilter();

  const filteredRooms = useMemo(
    () => data && filterRooms(data, filter),
    [data, filter],
  );

  return (
    <ScrollArea className="flex-1">
      <RoomGrid rooms={filteredRooms ?? []} />
    </ScrollArea>
  );
};
