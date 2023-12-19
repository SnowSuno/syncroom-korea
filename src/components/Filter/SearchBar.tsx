import React, { useRef } from "react";
import classNames from "classnames";

import Search from "../../resource/img/icon/search.svg?react";
import { useSearchInput } from "@/common/hooks";
import { FilterType } from "@/schema";

interface SearchBarProps {
  open: FilterType | null;
  setOpen: (state: FilterType | null) => void;
}

function SearchBar({ open, setOpen }: SearchBarProps) {
  // const search = useSelector((state: RootState) => state.filter.search);
  const inputField = useRef<HTMLInputElement>(null);

  const searchInput = useSearchInput();

  return (
    <div
      className={classNames(
        "SearchBar",
        { active: open === "query" },
        // { selected: value },
      )}
      onClick={() => inputField.current?.select()}
    >
      <input
        type="text"
        onFocus={() => setOpen("query")}
        onBlur={() => setOpen(null)}
        onKeyPress={e => {
          if (e.key === "Enter") inputField.current?.blur();
        }}
        ref={inputField}
        {...searchInput}
      />
      <Search />
    </div>
  );
}

export default React.memo(SearchBar);
