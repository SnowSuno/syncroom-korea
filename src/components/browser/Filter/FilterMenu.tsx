import React from "react";

import FilterButton from "./FilterButton";

import {FilterClassType} from "../../../modules/filter/types";
import {CountryType, InstType, StatusType} from "../../../common/classes/properties";

interface FilterMenuProps {
    filterClass: FilterClassType;
    menuItems: MenuItemProps[];
    activeClass: FilterClassType | null;
    handleActiveClass: (state: FilterClassType | null) => void;
}

export interface MenuItemProps {
    filter: CountryType | InstType | StatusType | null;
    icon: JSX.Element;
}

function FilterMenu({filterClass, menuItems, activeClass, handleActiveClass}: FilterMenuProps) {
    return (
        <div className="FilterMenu">
            {menuItems.map(({filter, icon}) => (
                <FilterButton
                    filter={filter}
                    filterClass={filterClass}
                    icon={icon}
                    activeClass={activeClass}
                    handleActiveClass={handleActiveClass}
                />
            ))}
        </div>
    )
}

export default React.memo(FilterMenu);