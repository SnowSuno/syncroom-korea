
export interface Room {
    realm: number;
    index: number;
    roomAttribute: {
        language: "ja";
    };
    roomName: string;
    roomDesc: string;
    needPasswd: boolean;
    creator: Member;
    members: Member[];
    numMembers: number;
    tagMask: string;
    tagOrig: string;
    createTime: string;
}

export interface Member {
    userId: string;
    nickname: string;
    nsgmMemberId: string;
    iconInfo: {
        type: "preset" | "url";
        preset: string;
        url: string;
    } | Record<string, never>;
    favorite: boolean;
}

export const getRoomId = (room: Room) => `${room.roomName}-${room.createTime}`;
