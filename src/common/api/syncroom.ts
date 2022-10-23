import axios from "axios";
import apiDataHandler from "../util/apiDataHandler";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/comm/public/room_list?pagesize=500&realm=4";

export const getApiData = async () => {
    const response = await axios.get<Response>(SYNCROOM_API, {timeout: 5000});
    return apiDataHandler(response.data.rooms);
}

export interface IconData {
    icon: string,
    iconurl: string
}

export interface RoomData {
    realm: number;
    index: number;
    roomAttribute: {
        language: "ja";
    };
    roomName: string;
    roomDesc: string;
    needPasswd: boolean;
    creator: MemberData;
    members: MemberData[];
    numMembers: number;
    tagMask: string;
    tagOrig: string;
    createTime: string;
}

interface MemberData {
    userId: string;
    nickname: string;
    nsgmMemberId: string;
    iconInfo: {
        type: "preset" | "url";
        preset: string;
        url: string;
    } | {};
    favorite: boolean;
}

interface Response {
    rooms: RoomData[]
}
