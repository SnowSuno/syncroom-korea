import React, {useState} from "react";
import "./style.css";

import SearchInput from "./SearchInput";
import FilterMenu, {MenuItemProps} from "./FilterMenu";

import {Country, Inst, Status} from "../../../common/classes/types";

import {FilterClass, FilterClassType} from "../../../modules/filter/types";


import {ReactComponent as Vocal} from "../../../resource/img/icon/Profile/vocal.svg";
import {ReactComponent as Guitar} from "../../../resource/img/icon/Profile/electric.svg";
import {ReactComponent as Bass} from "../../../resource/img/icon/Profile/bass.svg";
import {ReactComponent as Keys} from "../../../resource/img/icon/Profile/keyboard.svg";
import {ReactComponent as Drums} from "../../../resource/img/icon/Profile/drums.svg";

function Filter() {
    const [activeClass, setActiveClass] = useState<FilterClassType | null>(null);
    const handleActiveClass = (state: FilterClassType | null) => {
        setActiveClass(state);
    };

    const countryFilter: MenuItemProps[] = [
        {filter: null, icon: <Bass />},
        {filter: Country.KOREA, icon: <Bass />},
        {filter: Country.JAPAN, icon: <Bass />}
    ];

    const instFilter: MenuItemProps[] = [
        {filter: null, icon: <Bass />},
        {filter: Inst.VOCAL, icon: <Vocal />},
        {filter: Inst.GUITAR, icon: <Guitar />},
        {filter: Inst.BASS, icon: <Bass />},
        {filter: Inst.KEYS, icon: <Keys />},
        {filter: Inst.DRUMS, icon: <Drums />}
    ];

    const statusFilter: MenuItemProps[] = [
        {filter: null, icon: <Bass />},
        {filter: Status.PUBLIC, icon: <Bass />},
        {filter: Status.PRIVATE, icon: <Bass />}
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
