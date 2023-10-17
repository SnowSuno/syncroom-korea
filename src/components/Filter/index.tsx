import React, { useCallback, useState } from "react";
import "./style.scss";

import SearchInput from "./SearchBar";
import FilterMenu, { MenuItemProps } from "./FilterMenu";

import { Country, Inst, Status } from "../../common/classes/properties";

import { FilterClass, FilterClassType } from "../../modules/filter/types";

import CountryIcon from "../../resource/img/icon/country.svg?react";
import Korea from "../../resource/img/icon/Flag/korea-noborder.svg?react";
import Japan from "../../resource/img/icon/Flag/japan-noborder.svg?react";

import InstIcon from "../../resource/img/icon/instrument.svg?react";
import Vocal from "../../resource/img/icon/Profile/vocal.svg?react";
import Guitar from "../../resource/img/icon/Profile/electric.svg?react";
import Bass from "../../resource/img/icon/Profile/bass.svg?react";
import Keys from "../../resource/img/icon/Profile/keyboard.svg?react";
import Drums from "../../resource/img/icon/Profile/drums.svg?react";

import StatusIcon from "../../resource/img/icon/status.svg?react";
import Public from "../../resource/img/icon/public.svg?react";
import Private from "../../resource/img/icon/private.svg?react";

function Filter() {
  const [activeClass, setActiveClass] = useState<FilterClassType | null>(null);
  const handleActiveClass = useCallback(
    (state: FilterClassType | null) => setActiveClass(state),
    [],
  );

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
  );
}

const countryFilter: MenuItemProps[] = [
  { filter: null, icon: <CountryIcon /> },
  { filter: Country.KOREA, icon: <Korea /> },
  { filter: Country.JAPAN, icon: <Japan /> },
];

const instFilter: MenuItemProps[] = [
  { filter: null, icon: <InstIcon /> },
  { filter: Inst.VOCAL, icon: <Vocal /> },
  { filter: Inst.GUITAR, icon: <Guitar /> },
  { filter: Inst.BASS, icon: <Bass /> },
  { filter: Inst.KEYS, icon: <Keys /> },
  { filter: Inst.DRUMS, icon: <Drums /> },
];

const statusFilter: MenuItemProps[] = [
  { filter: null, icon: <StatusIcon /> },
  { filter: Status.PUBLIC, icon: <Public /> },
  { filter: Status.PRIVATE, icon: <Private /> },
];

export default Filter;
