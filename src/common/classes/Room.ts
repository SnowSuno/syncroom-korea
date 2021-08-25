import {MemberType} from "./Member";
import {CountryType, StatusType} from "./properties";

export interface RoomType {
    name: string,
    desc: string,
    members: MemberType[],
    country: CountryType,
    status: StatusType,
}


export default RoomType;