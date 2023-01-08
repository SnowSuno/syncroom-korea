import axios from "axios";
// import apiDataHandler from "../util/apiDataHandler";
import { Room } from "./interfaces";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/comm/public/room_list?pagesize=500&realm=4";

export const getSyncrooms = async () => {
    const response = await axios.get<Response>(SYNCROOM_API, {timeout: 5000});
    return response.data.rooms;
}

interface Response {
    rooms: Room[]
}
