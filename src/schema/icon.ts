import { z } from "zod";

export const iconSchema = z.object({
  preset: z.coerce.number().default(0),
  type: z.enum(["preset", "url"]).default("preset"),
  url: z
    .string()
    .transform(url => url.replace("http://", "https://"))
    .default(""),
});

export type Icon = z.infer<typeof iconSchema>;
