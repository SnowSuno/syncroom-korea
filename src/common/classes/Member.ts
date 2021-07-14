import {Inst, InstType} from "./types";

export interface Member {
    nickname: string,
    icon: number | string,
    inst: InstType
}

export const PrivateMember: Member = {
    nickname: '비공개 프로필',
    icon: -1,
    inst: Inst.OTHER
}