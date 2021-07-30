const {base62_encode, base62_decode} = require('@samwen/base62-util');

export const shareLinkDomain = "https://syncroomkr.github.io/join?";

export interface roomInfoProps {
    roomName: string;
    password: string;
}

export const encodeShareLink = ({roomName, password}: roomInfoProps) => {
    const roomInfo: string[] = [roomName];
    if (password) roomInfo.push(password);

    return base62_encode(
        JSON.stringify(roomInfo).slice(1, -1)
    );
};

export const decodeShareLink = (shareLink: string): roomInfoProps => {
    const roomInfo: string[] = JSON.parse(`[${base62_decode(shareLink)}]`);
    return {
        roomName: roomInfo[0],
        password: roomInfo[1] || ""
    };
};