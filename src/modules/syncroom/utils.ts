import { Room } from "../../common/api/interfaces";

export const getUsersFromRooms = (rooms: Room[]): Record<string, string> => (
  Object.fromEntries(rooms.flatMap(room =>
    room.members.map(member =>
      [member.userId, Room.getId(room)] as [string, string],
    ),
  ))
);
