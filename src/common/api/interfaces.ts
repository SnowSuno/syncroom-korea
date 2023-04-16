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

export const getId = (room: Room) => `${room.roomName}-${room.createTime}`;
const getTags = (room: Room) => (
  [...tagMap, room.tagOrig].filter((_, index) =>
    parseInt(room.tagMask)
      .toString(2)
      .split("")
      .reverse()
      [index] === "1",
  )
);
export const Room = { getId, getTags };

const tagMap = [
  "연습중",
  "수다방",
  "초보자 OK",
  "방송중",
  "녹음중",
  "Classic",
  "Country/Folk",
  "Club Music/EDM",
  "Hip Hop/Rap",
  "R&B/Soul",
  "Jazz",
  "Fusion",
  "Rock",
  "HR/HM",
  "팝송",
  "J-Pop",
  "아이돌",
  "애니/게임/보컬로이드",
  "월드뮤직",
] as const;
