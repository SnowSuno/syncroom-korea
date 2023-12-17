import type { Room, Filter } from "@/schema";
import { doesNotIncludeInst } from "@/utils/instrument";

export const filterRooms = (
  rooms: Room[],
  { query, language, instrument, password }: Filter,
) =>
  rooms
    .filter(
      room =>
        searchQuery(room.roomName, query) ||
        searchQuery(room.roomDesc, query) ||
        searchQuery(
          room.members.map(member => member.nickname),
          query,
        ) ||
        searchQuery(room.tags, query),
    )
    .filter(room => notSet(language) || room.language === language)
    .filter(room => notSet(instrument) || doesNotIncludeInst(room, instrument))
    .filter(room => notSet(password) || password === room.needPasswd);

const notSet = <T>(value: T | null): value is null => value === null;

const searchQuery = (search: string | string[], query: string): boolean => {
  if (Array.isArray(search)) return search.some(s => searchQuery(s, query));
  return search.replaceAll(" ", "").toLowerCase().includes(query.toLowerCase());
};
