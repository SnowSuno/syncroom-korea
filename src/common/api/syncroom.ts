import axios from "axios";
import RoomsConstructor from "../util/roomsConstructor";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

export const getRooms = async () => {
    const response = await axios.get<Response>(SYNCROOM_API);
    return RoomsConstructor(response.data.rooms);
}

export interface IconData {
    icon: string,
    iconurl: string
}

export interface RoomData {
    index: number,
    room_name: string,
    room_desc: string,
    need_passwd: boolean,
    create_time: string,
    creator_mid: string,
    creator_nick: string,
    creator_icon: IconData,
    num_members: number,
    members: string[],
    iconlist: IconData[]
}

interface Response {
    rooms: RoomData[]
}