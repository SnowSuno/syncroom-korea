import React from "react";
import "./style.css"

import MemberDisplay from "./MemberDisplay";
import Buttons from "./Buttons";

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
    const fullClass = (room.members.length === 5) ? 'full' : 'notfull';

    return (
        <div className="room-tile" style={size}>
            <div className={`room-header ${countryClass} ${fullClass}`}>
                Header contents will go here
            </div>
            <div className='room-desc'>
                tags and room descriptions will go here
            </div>
            <MemberDisplay />
            <Buttons />
        </div>
    );
}

export default RoomTile;
