import React from "react";
import "./style.scss";

import RoomTile from "../RoomTile";

import { CSSGrid } from "react-stonecutter";
import { useResponsiveCols } from "../../common/hooks/useResponsiveCols";

import type { Room } from "@/schema";

type RoomGridProps = {
  rooms: Room[];
};

/**
 * @deprecated
 */
function RoomGrid({ rooms }: RoomGridProps) {
  const style = {
    tileWidth: 21.5, // rem
    tileHeight: 26.3, // rem
    gridWidth: 86, // %
    gutter: 0.85, // rem
  };
  const column = useResponsiveCols({
    itemWidth: style.tileWidth,
    gridWidth: style.gridWidth,
  });

  return (
    <div className="RoomGrid">
      <CSSGrid
        component="ul"
        columns={column}
        lengthUnit="rem"
        columnWidth={style.tileWidth}
        itemHeight={style.tileHeight}
        gutterHeight={style.gutter}
        gutterWidth={style.gutter}
        duration={300}
      >
        {rooms.map(room => (
          <li key={room.id}>
            <RoomTile
              room={room}
              size={{
                width: `${style.tileWidth}rem`,
                height: `${style.tileHeight}rem`,
              }}
            />
          </li>
        ))}
      </CSSGrid>
    </div>
  );
}

export default React.memo(RoomGrid);
