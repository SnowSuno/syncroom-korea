import React, { useMemo } from "react";

import { useRooms } from "@/api/hooks/rooms";
import { filterRooms } from "@/utils/filter";
import { useFilter } from "@/common/hooks/useFilter";
import { Room } from "@/components/organisms";

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
      <Room.List>
        {rooms?.map(room => <Room.Card key={room.id} room={room} />)}
      </Room.List>
      {/*<RoomGrid rooms={rooms ?? []} />*/}
    </div>
  );
};
