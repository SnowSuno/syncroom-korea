import React, { useMemo } from "react";

import { useRooms } from "@/api/hooks/rooms";
import { filterRooms } from "@/utils/filter";
import { useFilter } from "@/common/hooks/useFilter";
import { RoomCard } from "@/components/organisms";

// temp
// import BetaNotiModal from "../components/temp/BetaNotiModal";

export const Home: React.FC = () => {
  const { data } = useRooms();
  const filter = useFilter();

  const rooms = useMemo(
    () => data && filterRooms(data, filter),
    [data, filter],
  );

  return (
    <div className="px-5 pt-2">
      <RoomCard.List>
        {rooms?.map(room => <RoomCard key={room.id} room={room} />)}
      </RoomCard.List>
    </div>
  );
};
