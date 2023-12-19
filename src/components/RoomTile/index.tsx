import React from "react";
import "./style.scss";
import classNames from "classnames";

import SimpleBar from "simplebar-react";

import MemberDisplay from "./MemberList";
import Buttons from "./Buttons";
import Flag from "../../resource/img/icon/Flag";
import Lock from "../../resource/img/icon/lock.svg?react";

import { useNotificationHandler } from "../../common/hooks/useNotificationHandler";
import type { Room } from "@/schema";

interface Size {
  width: string;
  height: string;
}

interface RoomTileProps {
  room: Room;
  size: Size;
}

function RoomTile({ room, size }: RoomTileProps) {
  const isFull: boolean = room.members.length === 5;

  const [subscribeStatus, changeSubscribeStatus] = useNotificationHandler({
    room,
    isFull,
  });

  return (
    <div
      id={room.id.toString()}
      className={classNames(
        "RoomTile",
        room.needPasswd ? "private" : "public",
        { full: isFull },
      )}
      style={size}
    >
      <div className="room-header">
        <Flag lang={room.language} />
        <span className="room-name">{room.roomName}</span>
        {room.needPasswd && <Lock />}
      </div>
      <SimpleBar className="room-desc-wrap">
        <div className="room-desc">
          <p>
            {room.tags.length > 0 ? "#" + room.tags.join("   #") + "\n" : null}
          </p>
          {room.roomDesc ? room.roomDesc.trim() : "방 설명이 없습니다."}
        </div>
      </SimpleBar>
      <MemberDisplay members={room.members} />
      <Buttons
        name={room.roomName}
        isPublic={!room.needPasswd}
        isFull={isFull}
        changeSubscription={changeSubscribeStatus}
        isSubscribed={subscribeStatus}
      />
    </div>
  );
}

export default RoomTile;
