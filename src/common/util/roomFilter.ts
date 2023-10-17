import RoomType from "../classes/Room";
import { MemberType } from "../classes/Member";
import { CountryType, InstType, StatusType } from "../classes/properties";

export const roomFilter =
  (
    search: string,
    country: CountryType | null,
    inst: InstType | null,
    status: StatusType | null,
  ) =>
  (room: RoomType) => {
    const lowerSearch = search.toLowerCase();
    if (
      !room.name.toLowerCase().includes(lowerSearch) &&
      room.members.filter((member: MemberType) =>
        member.nickname.toLowerCase().includes(lowerSearch),
      ).length === 0 &&
      room.tags.filter(tag => tag.toLowerCase().includes(lowerSearch))
        .length === 0
    )
      return false;
    if (country && room.country !== country) return false;
    if (
      inst &&
      room.members.filter((member: MemberType) => member.inst === inst)
        .length !== 0
    )
      return false;
    return !(status && room.status !== status);
  };
