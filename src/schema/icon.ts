import { z } from "zod";

export const iconSchema = z.object({
  preset: z.coerce.number(),
  type: z.enum(["preset", "url"]),
  url: z.string().url(),
});

export type Icon = z.infer<typeof iconSchema>;
