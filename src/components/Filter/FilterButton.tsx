import React, { type ReactNode, useCallback } from "react";

import { Filter, FilterType } from "@/schema";
import { useFilterStore } from "@/store";

interface FilterButtonProps<T extends FilterType> {
  filter: Filter[T];
  type: FilterType;
  icon: ReactNode;
  open: FilterType | null;
  setOpen: (state: FilterType | null) => void;
}

function FilterButton<T extends FilterType>({
  filter,
  type,
  icon,
  open,
  setOpen,
}: FilterButtonProps<T>) {
  const { isSelected, setFilter } = useFilterStore(state => ({
    setFilter: state.setFilter,
    isSelected: state.filter[type] === filter,
  }));
  const isActive: boolean = type === open;

  const onClick = useCallback(() => {
    if (isActive) {
      if (!isSelected) setFilter(type, filter);
      setOpen(null);
    } else {
      setOpen(type);
    }
  }, [filter, type, setOpen, isActive, isSelected, setFilter]);

  return (
    <button
      className="FilterButton"
      style={{ width: isSelected || isActive ? "3.2rem" : "0" }}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default React.memo(FilterButton);
