import React, {useMemo} from "react";
import "./style.scss";

import MemberDisplay from "./MemberList";
import Buttons from "./Buttons";
import Flag from "../../../resource/img/icon/Flag";
import {ReactComponent as Lock} from "../../../resource/img/icon/lock.svg";

import RoomType from "../../../common/classes/Room";
import {Status} from "../../../common/classes/properties";

interface Size {
    width: string;
    height: string;
}

interface RoomTileProps {
    room: RoomType;
    size: Size;
}

function RoomTile({room, size}: RoomTileProps) {
    const isPublic: boolean = useMemo(() => room.status === Status.PUBLIC, [room.status]);
    const isFull: boolean = room.members.length === 5;
    const statusClass = useMemo(() => isPublic ? 'public' : 'private', [isPublic]);
    const fullClass = isFull ? 'full' : '';

    return (
        <div className={`RoomTile ${statusClass} ${fullClass}`} style={size}>
            <div className="RoomHeader">
                <Flag country={room.country} />
                <span className='RoomName'>{room.name}</span>
                {isPublic ? <></> : <Lock />}
            </div>
            <div className="RoomDesc">
                {room.desc ? room.desc : "방 설명이 없습니다."}
            </div>
            <MemberDisplay members={room.members}/>
            <Buttons name={room.name} status={room.status} isFull={isFull}/>
        </div>
    );
}

export default RoomTile;
