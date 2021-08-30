import {Inst, InstType} from "./properties";

export interface MemberType {
    nickname: string,
    icon: string,
    inst: InstType
}

export const PrivateMember: MemberType = {
    nickname: '비공개 프로필',
    icon: "-1",
    inst: Inst.OTHER
}