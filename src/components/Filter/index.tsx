import React, {useCallback, useState} from "react";
import "./style.scss";

import SearchInput from "./SearchBar";
import FilterMenu, {MenuItemProps} from "./FilterMenu";

import {Country, Inst, Status} from "../../common/classes/properties";

import {FilterClass, FilterClassType} from "../../modules/filter/types";

import {ReactComponent as CountryIcon} from "../../resource/img/icon/country.svg";
import {ReactComponent as Korea} from "../../resource/img/icon/Flag/korea-noborder.svg";
import {ReactComponent as Japan} from "../../resource/img/icon/Flag/japan-noborder.svg";

import {ReactComponent as InstIcon} from "../../resource/img/icon/instrument.svg";
import {ReactComponent as Vocal} from "../../resource/img/icon/Profile/vocal.svg";
import {ReactComponent as Guitar} from "../../resource/img/icon/Profile/electric.svg";
import {ReactComponent as Bass} from "../../resource/img/icon/Profile/bass.svg";
import {ReactComponent as Keys} from "../../resource/img/icon/Profile/keyboard.svg";
import {ReactComponent as Drums} from "../../resource/img/icon/Profile/drums.svg";

import {ReactComponent as StatusIcon} from "../../resource/img/icon/status.svg";
import {ReactComponent as Public} from "../../resource/img/icon/public.svg";
import {ReactComponent as Private} from "../../resource/img/icon/private.svg";

function Filter() {
    const [activeClass, setActiveClass] = useState<FilterClassType | null>(null);
    const handleActiveClass = useCallback((state: FilterClassType | null) => setActiveClass(state), []);

    return (
        <>
            <SearchInput
                activeClass={activeClass}
                handleActiveClass={handleActiveClass}
            />
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
        </>
    )
}

const countryFilter: MenuItemProps[] = [
    {filter: null, icon: <CountryIcon/>},
    {filter: Country.KOREA, icon: <Korea/>},
    {filter: Country.JAPAN, icon: <Japan/>}
];

const instFilter: MenuItemProps[] = [
    {filter: null, icon: <InstIcon/>},
    {filter: Inst.VOCAL, icon: <Vocal/>},
    {filter: Inst.GUITAR, icon: <Guitar/>},
    {filter: Inst.BASS, icon: <Bass/>},
    {filter: Inst.KEYS, icon: <Keys/>},
    {filter: Inst.DRUMS, icon: <Drums/>}
];

const statusFilter: MenuItemProps[] = [
    {filter: null, icon: <StatusIcon/>},
    {filter: Status.PUBLIC, icon: <Public/>},
    {filter: Status.PRIVATE, icon: <Private/>}
];

export default Filter;
