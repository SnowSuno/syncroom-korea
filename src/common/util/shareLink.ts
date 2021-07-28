const {base62_encode, base62_decode} = require('@samwen/base62-util');

export const shareLinkDomain = "https://syncroomkr.github.io/join?";

export interface roomInfoProps {
    roomName: string;
    password?: string;
}

export const encodeShareLink = (roomInfo: roomInfoProps) => {
    return base62_encode(
        JSON.stringify(
            Object.values(roomInfo)
        ).slice(1, -1)
    );
};

export const decodeShareLink = (shareLink: string): roomInfoProps => {
    const roomInfo: string[] = JSON.parse(`[${base62_decode(shareLink)}]`);
    return {
        roomName: roomInfo[0],
        password: roomInfo[1] || ""
    };
};