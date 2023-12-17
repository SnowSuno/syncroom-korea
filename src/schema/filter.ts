import type { Instrument, Language } from "@/schema/enums";

export interface Filter {
  query: string;
  language: Language | null;
  instrument: Instrument | null;
  password: boolean | null;
}

export type FilterType = keyof Filter;
