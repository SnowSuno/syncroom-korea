import type { ChangeEvent } from "react";
import { useFilterStore } from "@/store";

export const useSearchInput = () =>
  useFilterStore(state => ({
    value: state.filter.query ?? "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      state.setFilter("query", query);
    },
  }));
