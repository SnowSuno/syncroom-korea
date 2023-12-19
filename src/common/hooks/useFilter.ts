import { useFilterStore } from "@/store";

export const useFilter = () => useFilterStore(state => state.filter);
