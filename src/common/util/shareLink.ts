// import {encode, decode, BASE62} from "@hugov/shorter-string";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";

export interface roomInfoProps {
    roomName: string;
    password?: string;
}

export const encodeShareLink = ({roomName, password}: roomInfoProps) => {
    const payload: string | number = (typeof password === 'string') ? password : 1;

    const roomInfo: (string | number)[] = [roomName];
    if (payload) roomInfo.push(payload);

    return (document.URL + "join?" + compressToEncodedURIComponent(
        JSON.stringify(roomInfo).slice(1, -1),
    ));
};

export const decodeShareLink = (shareLink: string): roomInfoProps => {
    const roomInfo = JSON.parse(`[${decompressFromEncodedURIComponent(shareLink)}]`);
    if (![1, 2].includes(roomInfo.length)) {
        throw new Error("parse error");
    }
    const roomName: string = roomInfo[0];
    const payload: string | undefined | 1 = roomInfo[1];

    let password: string | undefined = undefined;
    if (payload !== 1) password = payload || "";

    return {
        roomName,
        password
    };
};
