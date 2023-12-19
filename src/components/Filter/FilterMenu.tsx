import React, { type ReactNode } from "react";
import classNames from "classnames";

import FilterButton from "./FilterButton";

import type { Filter, FilterType } from "@/schema";

interface FilterMenuProps<T extends FilterType> {
  type: T;
  options: Option<T>[];
  open: FilterType | null;
  setOpen: (state: FilterType | null) => void;
}

export interface Option<T extends FilterType> {
  key: Filter[T] | null;
  icon: ReactNode;
}

function FilterMenu<T extends FilterType>({
  type,
  options,
  open,
  setOpen,
}: FilterMenuProps<T>) {
  // const current = useSelector((state: RootState) => state.filter[type]);
  // const filter = useFilterStore(state =>

  return (
    <div className={classNames("FilterMenu")}>
      {options.map(({ key, icon }, index) => (
        <FilterButton
          key={index}
          filter={key}
          type={type}
          icon={icon}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}

export default React.memo(FilterMenu);
