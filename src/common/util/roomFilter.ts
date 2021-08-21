import Room from "../classes/Room";
import {Member} from "../classes/Member";
import {CountryType, InstType, StatusType} from "../classes/types";

export const roomFilter = (
    search: string,
    country: CountryType | null,
    inst: InstType | null,
    status: StatusType | null
) => (room: Room) => {
    if (!room.name.includes(search)
        && room.members.filter(
            (member: Member) => member.nickname.includes(search)
        ).length === 0) return false;
    if (country && room.country !== country) return false;
    if (inst && room.members.filter(
        (member: Member) => member.inst === inst
    ).length !== 0) return false;
    return !(status && room.status !== status);
};