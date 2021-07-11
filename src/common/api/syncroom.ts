import axios from "axios";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

export const getRoomsData = async () => {
    const response = await axios.get<RoomData[]>(SYNCROOM_API);
    return response.data;
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