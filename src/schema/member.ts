import { z } from "zod";
import { iconSchema } from "@/schema/icon";

export const memberSchema = z.object({
  userId: z.string(),
  nickname: z.string(),
  nsgmMemberId: z.coerce.number(),
  iconInfo: iconSchema,
  favorite: z.boolean(),
});

export type Member = z.infer<typeof memberSchema>;

export const creatorSchema = memberSchema.extend({
  idProvider: z.enum(["ymid-jp", "ymid-kr"]),
});

export type Creator = z.infer<typeof creatorSchema>;
