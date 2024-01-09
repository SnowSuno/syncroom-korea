import React, { useMemo } from "react";

import RoomGrid from "@/components/RoomGrid";

import { useRooms } from "@/api/hooks/rooms";
import { filterRooms } from "@/utils/filter";
import { useFilter } from "@/common/hooks/useFilter";

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
    <div className="px-5 pt-2">
      <RoomGrid rooms={filteredRooms ?? []} />
    </div>
  );
};
