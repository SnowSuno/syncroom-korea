import { z } from "zod";
import { iconSchema } from "@/schema/icon";

const generateId = <T extends { userId: string; nsgmMemberId: number }>(
  member: T,
) => ({
  ...member,
  id: `${member.userId}-${member.nsgmMemberId}`,
});

const baseMemberSchema = z.object({
  userId: z.string(),
  nickname: z.string(),
  nsgmMemberId: z.coerce.number(),
  iconInfo: iconSchema.default({ preset: 0, type: "preset", url: "" }),
  favorite: z.boolean(),
});

export const memberSchema = baseMemberSchema.transform(generateId);

export type Member = z.infer<typeof memberSchema>;

export const creatorSchema = baseMemberSchema
  .extend({
    idProvider: z.enum(["ymid-jp", "ymid-kr", ""]),
  })
  .transform(generateId);

export type Creator = z.infer<typeof creatorSchema>;
