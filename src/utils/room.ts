import type { RoomSource } from "@/schema/room";
import type { Language } from "@/schema/enums";

export const getId = (roomSource: RoomSource) => `${roomSource.creator.userId}`;

export const getLanguage = (roomSource: RoomSource) =>
  roomSource.creator.idProvider.split("-")[1] as Language;
