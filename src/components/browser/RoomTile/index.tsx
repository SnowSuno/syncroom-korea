import React from "react";
import "./style.css"

import MemberDisplay from "./MemberDisplay";
import Buttons from "./Buttons";
import Flag from "../../../resource/img/icon/Flag";

import Room from "../../../common/classes/Room";
import {Status} from "../../../common/classes/types";

interface Size {
    width: string,
    height: string
}

interface RoomTileProps {
    room: Room,
    size: Size
}

function RoomTile({room, size}: RoomTileProps) {
    const countryClass = (room.status === Status.PUBLIC) ? 'public' : 'private';
    const isFull: boolean = room.members.length === 5
    const fullClass = isFull ? 'full' : '';

    return (
        <div className="room-tile" style={size}>
            <div className={`room-header ${countryClass} ${fullClass}`}>
                <Flag country={room.country} />
                <span className='room-name'>{room.name}</span>
            </div>
            <div className='room-desc'>
                {room.desc}
            </div>
            <MemberDisplay members={room.members}/>
            <Buttons name={room.name} status={room.status} isFull={isFull}/>
        </div>
    );
}

export default RoomTile;
