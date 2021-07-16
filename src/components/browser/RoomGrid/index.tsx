import React from "react";
import "./style.css"

import RoomTile from "../RoomTile";

import {CSSGrid} from 'react-stonecutter';
import {useResponsiveCols} from "../../../common/hooks/useResponsiveCols";

import Room from "../../../common/classes/Room";

type RoomGridProps = {
    rooms: Room[]
};

function RoomGrid({rooms}: RoomGridProps) {
    const style = {
        tileWidth: 21.5,   // rem
        tileHeight: 26.3,  // rem
        gridWidth: 86,     // %
        gutter: 0.85,      // rem
    };
    const column = useResponsiveCols({
        itemWidth: style.tileWidth,
        gridWidth: style.gridWidth
    });

    return (
        <div className="room-grid">
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
                    <li key={room.name}>
                        <RoomTile room={room}/>
                    </li>
                ))}
            </CSSGrid>
        </div>
    );
}

export default RoomGrid;
