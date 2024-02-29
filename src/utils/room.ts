import type { Moment } from "moment";
import type { Language } from "@/schema/enums";

export const getId = (roomSource: {
  creator: { id: string };
  createTime: Moment;
}) => `${roomSource.creator.id}-${roomSource.createTime.unix()}`;

export const getLanguage = (roomSource: { creator: { idProvider: string } }) =>
  roomSource.creator.idProvider.split("-")[1] as Language;
