import { z } from "zod";
import { creatorSchema, memberSchema } from "./member";
import { parseTags } from "@/utils/tag";
import { getId, getLanguage } from "@/utils/room";
import moment from "moment";

export const roomSchema = z
  .object({
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
    createTime: z.string().transform(date => moment(date)),
  })
  .transform(({ tagMask, tagOrig, ...room }) => ({
    id: getId(room),
    tags: parseTags(tagMask, tagOrig),
    language: getLanguage(room),
    ...room,
  }));

export type Room = z.infer<typeof roomSchema>;
