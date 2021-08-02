import React, {useState} from "react";

import {Country, CountryType, Inst, InstType, Status, StatusType} from "../../../common/classes/types";

interface FilterMenuProps<FilterType> {
    menuItems: MenuItemProps<FilterType>[];
}

interface MenuItemProps<FilterType> {
    type: FilterType;
    icon: JSX.Element;
}

function FilterMenu<FilterType>({menuItems}: FilterMenuProps<FilterType>) {
    const [active, useActive] = useState<boolean>(false);


    return (
        <div className="filter">
            {menuItems.map(() => {
                }
            )}
        </div>
    )
}

export default FilterMenu;