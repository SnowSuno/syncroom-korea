import React, {FormEvent, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {setSearch} from "../../../modules/filter";
import {number} from "prop-types";


function SearchInput() {
    const search = useSelector((state: RootState) => state.filter.search);
    const dispatch = useDispatch();
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
    const [value, setValue] = useState<string>(search);

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
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchInput;
