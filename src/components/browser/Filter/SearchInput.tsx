import React, {FormEvent, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {setSearch} from "../../../modules/filter";
import {FilterClass, FilterClassType} from "../../../modules/filter/types";

interface SearchInputProps {
    activeClass: FilterClassType | null;
    handleActiveClass: (state: FilterClassType | null) => void;
}

function SearchInput({activeClass, handleActiveClass}: SearchInputProps) {
    const search = useSelector((state: RootState) => state.filter.search);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
    const [value, setValue] = useState<string>(search);
    const isActive: boolean = activeClass === FilterClass.search;

    const onChange = async (e: FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = e;
        setValue(value);

        if (timer) clearTimeout(timer);
        const newTimer = setTimeout(async () => {
            dispatch(setSearch(value));
        }, 200);
        setTimer(newTimer);
    };

    return (
        <input
            className={isActive ? "active" : ""}
            type="text"
            value={value}
            onChange={onChange}
            onFocus={() => handleActiveClass(FilterClass.search)}
            onBlur={() => handleActiveClass(null)}
        />
    );
}

export default SearchInput;
