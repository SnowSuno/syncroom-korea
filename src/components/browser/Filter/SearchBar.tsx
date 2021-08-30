import React, {FormEvent, useCallback, useRef, useState} from "react";
import classNames from "classnames";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {setSearch} from "../../../modules/filter";
import {FilterClass, FilterClassType} from "../../../modules/filter/types";

import {ReactComponent as Search} from "../../../resource/img/icon/search.svg";

interface SearchBarProps {
    activeClass: FilterClassType | null;
    handleActiveClass: (state: FilterClassType | null) => void;
}

function SearchBar({activeClass, handleActiveClass}: SearchBarProps) {
    const search = useSelector((state: RootState) => state.filter.search);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
    const [value, setValue] = useState<string>(search);
    const isActive: boolean = activeClass === FilterClass.search;
    const inputField = useRef<HTMLInputElement>(null);

    const onChange = useCallback(async (e: FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = e;
        setValue(value);

        if (timer) clearTimeout(timer);
        const newTimer = setTimeout(async () => {
            dispatch(setSearch(value));
        }, 200);
        setTimer(newTimer);
    }, [dispatch, timer]);

    return (
        <div
            className={classNames("SearchBar", {active: isActive})}
            onClick={() => inputField.current?.select()}
        >
            <input
                type="text"
                value={value}
                onChange={onChange}
                onFocus={() => handleActiveClass(FilterClass.search)}
                onBlur={() => handleActiveClass(null)}
                ref={inputField}
            />
            <Search />
        </div>
    );
}

export default React.memo(SearchBar);
