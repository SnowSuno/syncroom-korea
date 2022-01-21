import {MemberType} from "./Member";
import {CountryType, StatusType} from "./properties";

export interface RoomType {
    name: string,
    id: number,
    desc: string,
    members: MemberType[],
    country: CountryType,
    status: StatusType,
    tags: string[],
}


export default RoomType;
