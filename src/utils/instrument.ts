import type { Room, Instrument } from "@/schema";

const presetInstrumentMap: Record<number, Instrument> = {
  0: "drum",
  1: "drum",
  2: "bass",
  3: "guitar",
  4: "guitar",
  5: "keyboard",
  6: "keyboard",
  7: "other",
  8: "other",
  9: "other",
  10: "other",
  11: "other",
  12: "vocal",
  13: "other",
};

export const getInst = (iconInfo: {
  preset: number;
  type: "preset" | "url";
}): Instrument =>
  iconInfo.type === "preset" ? presetInstrumentMap[iconInfo.preset] : "other";

export const doesNotIncludeInst = (
  room: Pick<Room, "members">,
  inst: Instrument,
) => room.members.every(member => member.iconInfo.inst !== inst);
