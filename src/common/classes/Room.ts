import {Member} from "./Member";
import {CountryType, StatusType} from "./types";

export interface Room {
    name: string,
    desc: string,
    members: Member[],
    country: CountryType,
    status: StatusType,
}


export default Room;