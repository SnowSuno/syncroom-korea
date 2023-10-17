import { InstType } from "./properties";

export type MemberTypeType = "general" | "private" | "temp";

export interface MemberType {
  type: MemberTypeType;
  nickname: string;
  icon: string;
  inst: InstType;
}

// export const PrivateMember: MemberType = {
//     type: "private",
//     nickname: '비공개 프로필',
//     icon: "-1",
//     inst: Inst.OTHER
// }
