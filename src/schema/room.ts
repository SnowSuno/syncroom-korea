import { z } from "zod";
import { creatorSchema, memberSchema } from "./member";
import { parseTags } from "@/utils/tag";
import { getId, getLanguage } from "@/utils/room";

export const roomSourceSchema = z.object({
  realm: z.number(),
  index: z.number(),
  roomAttribute: z.object({
    language: z.literal("ja"),
  }),
  roomName: z.string(),
  roomDesc: z.string(),
  needPasswd: z.boolean(),
  creator: creatorSchema,
  members: z.array(memberSchema),
  numMembers: z.number(),
  tagMask: z.coerce.number(),
  tagOrig: z.string(),
  createTime: z.coerce.date(),
});

export type RoomSource = z.infer<typeof roomSourceSchema>;

export const roomSchema = roomSourceSchema.transform(room => ({
  id: getId(room),
  tags: parseTags(room.tagMask, room.tagOrig),
  language: getLanguage(room),
  ...room,
}));

export type Room = z.infer<typeof roomSchema>;
