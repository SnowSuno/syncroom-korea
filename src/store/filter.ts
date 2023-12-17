import { create } from "zustand";
import type { Filter, FilterType } from "@/schema";

interface FilterStore {
  filter: Filter;
  setFilter: <T extends FilterType>(type: T, value: Filter[T]) => void;
}

export const useFilterStore = create<FilterStore>(set => ({
  filter: {
    query: "",
    language: null,
    instrument: null,
    password: null,
  },
  setFilter: (type, value) =>
    set(prev => ({ filter: { ...prev.filter, [type]: value } })),
}));
