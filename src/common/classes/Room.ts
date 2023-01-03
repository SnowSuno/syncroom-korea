import {MemberType} from "./Member";
import {CountryType, StatusType} from "./properties";

export interface IRoom {
    name: string,
    id: number,
    desc: string,
    members: MemberType[],
    country: CountryType,
    status: StatusType,
    tags: string[],
}


export default IRoom;
