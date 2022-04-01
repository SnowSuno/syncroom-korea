import React, {useMemo} from "react";
import "./style.scss";
import classNames from "classnames";

import SimpleBar from "simplebar-react";

import MemberDisplay from "./MemberList";
import Buttons from "./Buttons";
import Flag from "../../resource/img/icon/Flag";
import {ReactComponent as Lock} from "../../resource/img/icon/lock.svg";

import RoomType from "../../common/classes/Room";
import {Status} from "../../common/classes/properties";

import {useNotificationHandler} from "../../common/hooks/useNotificationHandler";

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

    const [subsribeStatus, changeSubscibeStatus] = useNotificationHandler({
        room, isFull
    });


    return (
        <div
            id={room.id.toString()}
            className={classNames(
                "FoolsRoomTile",
                {"public": isPublic, "private": !isPublic},
                {"full": isFull})}
            style={size}
        >
            <div className="room-header">
                <Flag country={room.country}/>
                <span className='room-name'>{room.name}</span>
                {isPublic ? <></> : <Lock/>}
            </div>
            <SimpleBar className="room-desc-wrap">
                <div className="room-desc">
                    <p>
                        {room.tags.length > 0
                            ? "#" + room.tags.join("   #") + "\n"
                            : null}
                    </p>
                    {room.desc ? room.desc.trim() : "방 설명이 없습니다."}
                </div>
            </SimpleBar>
            <MemberDisplay members={room.members}/>
            <Buttons
                name={room.name}
                status={room.status}
                isFull={isFull}
                changeSubscription={changeSubscibeStatus}
                isSubscribed={subsribeStatus}
            />
        </div>
    );
}

export default RoomTile;
