import type { RoomSource } from "@/schema/room";

export const getId = (roomSource: RoomSource) =>
  `${roomSource.realm}-${roomSource.index}`;

export const getLanguage = (roomSource: RoomSource) =>
  roomSource.creator.idProvider.split("-")[1] as "jp" | "kr";
