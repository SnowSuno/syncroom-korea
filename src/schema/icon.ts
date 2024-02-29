import { z } from "zod";
import { getInst } from "@/utils/instrument";
import { getPresetIcon } from "@/assets/profile";

export const iconSchema = z
  .object({
    preset: z.coerce.number().default(0),
    type: z.enum(["preset", "url"]).default("preset"),
    url: z
      .string()
      .transform(url => url.replace("http://", "https://"))
      .default(""),
  })
  .default({ preset: 0, type: "preset", url: "" })
  .transform(icon => ({
    url: icon.type === "preset" ? getPresetIcon(icon.preset) : icon.url,
    inst: getInst(icon),
  }));

export type Icon = z.infer<typeof iconSchema>;
