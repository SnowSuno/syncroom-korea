import React from "react";
import {motion} from "framer-motion";

import {Room} from "../common/api/interfaces";
import {Profile} from "./Profile";

interface Props {
    room: Room;
}

export const Card: React.FC<Props> = ({room}) => {
    return (
        <motion.div
            layout
            className="h-80 w-96 py-5 px-4 pb-10 cursor-pointer rounded-xl shadow-sm relative bg-white hover:shadow-2xl transition-shadow"
        >
            <h1 className="px-2 font-bold text-xl line-clamp-1">
                {room.roomName}
            </h1>


            <div className="px-2 mt-1 text-gray-400 text-xs break-all h-10 overflow-y-hidden leading-normal line-clamp-2">
                <div className="flex flex-shrink-0 flex-row gap-2 mb-1 overflow-x-auto scrollbar-hide">
                    {Room.getTags(room).map(tag =>
                        <div
                            className="text-xs text-gray-400 whitespace-nowrap bg-gray-100 rounded px-1.5 py-0.5">{tag}</div>,
                    )}
                </div>
                {room.roomDesc || "방 설명이 없습니다"}
            </div>


            <div className="mt-1">
                {room.members.map(member =>
                    <Profile key={member.userId || member.nickname} member={member}/>,
                )}
            </div>

            <div className="absolute bottom-4 text-sm text-gray-400">
                {room.members.length} / 5
            </div>
        </motion.div>
    );
};
