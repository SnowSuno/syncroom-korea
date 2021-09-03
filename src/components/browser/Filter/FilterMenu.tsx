import React from "react";
import classNames from "classnames";

import FilterButton from "./FilterButton";

import {FilterClassType} from "../../../modules/filter/types";
import {CountryType, InstType, StatusType} from "../../../common/classes/properties";
import {useSelector} from "react-redux";
import {RootState} from "../../../modules";

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
    const current = useSelector((state: RootState) => state.filter[filterClass]);

    return (
        <div className={classNames(
            "FilterMenu",
            {selected: current !== null}
        )}>
            {menuItems.map(({filter, icon}) => (
                <FilterButton
                    filter={filter}
                    current={current}
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