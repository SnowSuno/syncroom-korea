import { Room, getRoomId } from "../../common/api/interfaces";

export const getUsersFromRooms = (rooms: Room[]): Record<string, string> => (
  Object.fromEntries(rooms.flatMap(room =>
    room.members.map(member =>
      [member.userId, getRoomId(room)] as [string, string],
    ),
  ))
);
