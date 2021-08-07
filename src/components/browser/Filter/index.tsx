import React, {useState} from "react";
import "./style.css";

import FilterMenu, {MenuItemProps} from "./FilterMenu";


import {Country, CountryType, Inst, InstType, Status, StatusType} from "../../../common/classes/types";

import {FilterClass, FilterClassType} from "../../../modules/filter/types";

function Filter() {
    const [activeClass, setActiveClass] = useState<FilterClassType | null>(null);
    const handleActiveClass = (state: FilterClassType | null) => {
        setActiveClass(state);
    };

    const countryFilter: MenuItemProps[] = [
        {filter: null, icon: 'all'},
        {filter: Country.KOREA, icon: 'korea'},
        {filter: Country.JAPAN, icon: 'japan'}
    ];

    const instFilter: MenuItemProps[] = [
        {filter: null, icon: 'all'},
        {filter: Inst.VOCAL, icon: 'vocal'},
        {filter: Inst.GUITAR, icon: 'guitar'},
        {filter: Inst.BASS, icon: 'bass'},
        {filter: Inst.KEYS, icon: 'keys'},
        {filter: Inst.DRUMS, icon: 'drums'}
    ];

    const statusFilter: MenuItemProps[] = [
        {filter: null, icon: 'all'},
        {filter: Status.PUBLIC, icon: 'public'},
        {filter: Status.PRIVATE, icon: 'private'}
    ];

    return (
        <div className="filter-container">
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
