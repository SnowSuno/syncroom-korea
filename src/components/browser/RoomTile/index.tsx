import React from "react";
import "./style.css";

import MemberDisplay from "./MemberDisplay";
import Buttons from "./Buttons";
import Flag from "../../../resource/img/icon/Flag";
import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

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
    const isPublic: boolean = room.status === Status.PUBLIC
    const isFull: boolean = room.members.length === 5
    const statusClass = isPublic ? 'public' : 'private';
    const fullClass = isFull ? 'full' : '';

    return (
        <div className={`room-tile ${statusClass} ${fullClass}`} style={size}>
            <div className="room-header">
                <Flag country={room.country} />
                <span className='room-name'>{room.name}</span>
                {isPublic ? <></> : <Lock />}
            </div>
            <div className="room-desc">
                {room.desc ? room.desc : "방 설명이 없습니다."}
            </div>
            <MemberDisplay members={room.members}/>
            <Buttons name={room.name} status={room.status} isFull={isFull}/>
        </div>
    );
}

export default RoomTile;
