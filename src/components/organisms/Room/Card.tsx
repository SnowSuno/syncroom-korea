import React, { forwardRef } from "react";
import { Room } from "@/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "@/components/molecules";
import { Button } from "@/components/ui/button";

interface Props {
  room: Room;
}

export const RoomCard = forwardRef<HTMLDivElement, Props>(({ room }, ref) => {
  return (
    <Card
      layout
      ref={ref}
      layoutId={room.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CardHeader>
        <CardTitle>{room.roomName}</CardTitle>
        <CardDescription className="h-10 overflow-hidden">
          {room.roomDesc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Profile.List>
          {room.members.map(member => (
            <Profile key={member.userId} member={member} />
          ))}
        </Profile.List>
      </CardContent>
      <CardFooter className="flex flex-row justify-end gap-2">
        <Button size="sm" variant="secondary">
          임시 참여
        </Button>
        <Button size="sm">참여</Button>
      </CardFooter>
    </Card>
  );
});
