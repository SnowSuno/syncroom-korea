const { base62_encode, base62_decode } = require('@samwen/base62-util');

export const shareLinkDomain = "https://syncroomkr.github.io/join?";

interface encodeShareLinkProps {
    roomName: string;
    password? : string;
}
export const encodeShareLink = (roomInfo: encodeShareLinkProps) => {
    return base62_encode(
        JSON.stringify(
            Object.values(roomInfo)
        ).slice(1, -1)
    );
};

export const decodeShareLink = (shareLink: string) => {
    const roomInfo = JSON.parse(`[${base62_decode(shareLink)}]`);

    return {
        roomName: roomInfo[0],
        password: roomInfo[1] || ""
    };
};