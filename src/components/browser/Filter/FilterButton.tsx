import React from "react";

interface FilterButtonProps<FilterType> {
    type: FilterType;
    icon: JSX.Element;
    isOpen: boolean;
}

function FilterButton<FilterType>({type, icon, isOpen}: FilterButtonProps<FilterType>) {

    return (
        <button disabled>
            {icon}
        </button>
    )
}

export default FilterButton;
