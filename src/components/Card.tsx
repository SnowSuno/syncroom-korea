import React from "react";
import { Room } from "../common/api/interfaces";
import { Profile } from "./Profile";

interface Props {
  room: Room;
}

export const Card: React.FC<Props> = ({ room }) => {
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-2xl transition-shadow">
      <h1 className="font-bold text-xl line-clamp-1">
        {room.roomName}
      </h1>
      <div className="mt-1 text-gray-400 text-sm break-all line-clamp-3">
        {room.roomDesc || "방 설명이 없습니다."}
      </div>
      
      <div className="mt-3">
        {room.members.map(member => <Profile member={member}/> )}
      </div>
      
    </div>
  );
};
