import React from "react";
import "./style.scss"

import RoomTile from "../RoomTile";

import {CSSGrid} from 'react-stonecutter';
import {useResponsiveCols} from "../../common/hooks/useResponsiveCols";

import RoomType from "../../common/classes/Room";


import {Country, Status} from "../../common/classes/properties";

import FoolsRoomTile from "../FoolsRoomTile";

type RoomGridProps = {
    rooms: RoomType[]
};

const foolsDayRoom: RoomType = {
    name: "개발자의★방",
    id: 0,
    desc: "♚♚개발자의☆방♚♚만우절$$파격 이벤트☜☜100%※ ♜" +
        "싱크룸♜코리아￥@@@ 즉시이동https://syncroom.kr/developers-room",
    members: [
        {type: "general", nickname: "늅늅이", icon: "2", inst: "inst/BASS"},
        {type: "general", nickname: "파나", icon: "0", inst: "inst/DRUMS"}
    ],
    country: Country.KOREA,
    status: Status.PUBLIC,
    tags: [],
}

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
                <li key={0}>
                    <FoolsRoomTile
                        room={foolsDayRoom}
                        size={{
                            width: `${style.tileWidth}rem`,
                            height: `${style.tileHeight}rem`
                        }}
                    />
                </li>
                {rooms.map(room => (
                    <li key={room.id}>
                        <RoomTile
                            room={room}
                            size={{
                                width: `${style.tileWidth}rem`,
                                height: `${style.tileHeight}rem`
                            }}
                        />
                    </li>
                ))}
            </CSSGrid>
        </div>
    );
}

export default React.memo(RoomGrid);
