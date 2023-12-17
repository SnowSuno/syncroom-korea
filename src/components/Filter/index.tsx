import React, { useState } from "react";
import "./style.scss";

import SearchInput from "./SearchBar";
import FilterMenu, { Option } from "./FilterMenu";

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
import type { FilterType } from "@/schema";

function Filter() {
  const [open, setOpen] = useState<FilterType | null>(null);

  return (
    <>
      <SearchInput open={open} setOpen={setOpen} />
      <FilterMenu
        type="language"
        open={open}
        options={countryFilter}
        setOpen={setOpen}
      />
      <FilterMenu
        type="instrument"
        open={open}
        options={instFilter}
        setOpen={setOpen}
      />
      <FilterMenu
        type="password"
        open={open}
        options={statusFilter}
        setOpen={setOpen}
      />
    </>
  );
}

const countryFilter: Option<"language">[] = [
  { key: null, icon: <CountryIcon /> },
  { key: "kr", icon: <Korea /> },
  { key: "jp", icon: <Japan /> },
];

const instFilter: Option<"instrument">[] = [
  { key: null, icon: <InstIcon /> },
  { key: "vocal", icon: <Vocal /> },
  { key: "guitar", icon: <Guitar /> },
  { key: "bass", icon: <Bass /> },
  { key: "keyboard", icon: <Keys /> },
  { key: "drum", icon: <Drums /> },
];

const statusFilter: Option<"password">[] = [
  { key: null, icon: <StatusIcon /> },
  { key: false, icon: <Public /> },
  { key: true, icon: <Private /> },
];

export default Filter;
