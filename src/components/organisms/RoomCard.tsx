import React, { forwardRef, ReactElement } from "react";
import { Room } from "@/schema";

import { Card } from "@/components/ui/card";
import { Profile } from "@/components/molecules";
import { Button } from "@/components/ui/button";

import { Lock } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence } from "framer-motion";

interface Props {
  room: Room;
}

const Component = forwardRef<HTMLDivElement, Props>(({ room }, ref) => {
  return (
    <Card
      layout
      ref={ref}
      layoutId={room.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group/card hover:shadow-lg transition-shadow grid grid-cols-2 p-5 gap-4 h-64"
    >
      <section className="min-w-0 relative overflow-hidden break-all">
        <h2 className="text-gray-900 text-lg font-bold">
          {room.needPasswd && (
            <Lock className="w-6 h-6 inline-block mr-1 mb-1" />
          )}
          {room.roomName}
        </h2>
        {!!room.tags.length && (
          <div className="flex flex-row gap-2 flex-wrap pt-2">
            {room.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <p className="pt-2 overflow-ellipsis whitespace-pre-wrap font-medium text-xs text-gray-500 leading-6">
          {room.roomDesc || "방 설명이 없습니다."}
        </p>
        <div className="absolute w-full bottom-0 flex flex-row gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
          <Button size="sm" className="flex-1">
            참여
          </Button>
          <Button size="sm" className="flex-1" variant="secondary">
            임시 참여
          </Button>
        </div>
      </section>
      <Profile.List>
        {room.members.map(member => (
          <Profile key={member.nsgmMemberId} member={member} />
        ))}
      </Profile.List>
    </Card>
  );
});

const List: React.FC<{ children?: ReactElement<Props>[] }> = ({ children }) => (
  <li className="grid grid-cols-auto-fit gap-4">
    <AnimatePresence mode="popLayout">{children}</AnimatePresence>
  </li>
);

export const RoomCard = Object.assign(Component, { List });
