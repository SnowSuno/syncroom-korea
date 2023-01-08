import React from "react";
import { RoomType } from "../common/classes/Room";

interface Props {
  room: RoomType;
}

export const Card: React.FC<Props> = ({ room }) => {
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-2xl transition-shadow">
      <h1 className="font-bold text-lg overflow-ellipsis whitespace-nowrap overflow-hidden width-[100%]">{room.name}</h1>
      <div className="text-gray-400 text-sm break-all">{room.desc}</div>
    </div>
  );
};
