import React, {useState} from "react";
import "./style.css";

import SearchInput from "./SearchInput";
import FilterMenu, {MenuItemProps} from "./FilterMenu";

import {Country, Inst, Status} from "../../../common/classes/types";

import {FilterClass, FilterClassType} from "../../../modules/filter/types";

function Filter() {
    const [activeClass, setActiveClass] = useState<FilterClassType | null>(null);
    const handleActiveClass = (state: FilterClassType | null) => {
        setActiveClass(state);
    };

    const countryFilter: MenuItemProps[] = [
        {filter: null, icon: '🌐'},
        {filter: Country.KOREA, icon: '🇰🇷'},
        {filter: Country.JAPAN, icon: '🇯🇵'}
    ];

    const instFilter: MenuItemProps[] = [
        {filter: null, icon: '🎵'},
        {filter: Inst.VOCAL, icon: '🎤'},
        {filter: Inst.GUITAR, icon: '🎸'},
        {filter: Inst.BASS, icon: 'B'},
        {filter: Inst.KEYS, icon: '🎹'},
        {filter: Inst.DRUMS, icon: '🥁'}
    ];

    const statusFilter: MenuItemProps[] = [
        {filter: null, icon: 'L'},
        {filter: Status.PUBLIC, icon: '🔓'},
        {filter: Status.PRIVATE, icon: '🔒'}
    ];

    return (
        <div className="filter-container">
            <SearchInput />
            <FilterMenu
                filterClass={FilterClass.country}
                activeClass={activeClass}
                menuItems={countryFilter}
                handleActiveClass={handleActiveClass}
            />
            <FilterMenu
                filterClass={FilterClass.inst}
                activeClass={activeClass}
                menuItems={instFilter}
                handleActiveClass={handleActiveClass}
            />
            <FilterMenu
                filterClass={FilterClass.status}
                activeClass={activeClass}
                menuItems={statusFilter}
                handleActiveClass={handleActiveClass}
            />
        </div>
    )
}

export default Filter;
