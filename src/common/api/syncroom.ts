import axios from "axios";
import apiDataHandler from "../util/apiDataHandler";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

export const getApiData = async () => {
    const response = await axios.get<Response>(SYNCROOM_API, {timeout: 5000});
    return apiDataHandler(response.data.rooms);
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