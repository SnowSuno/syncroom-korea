import React, {useCallback} from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {setFilter} from "../../../modules/filter";

import {FilterClassType} from "../../../modules/filter/types";
import {CountryType, InstType, StatusType} from "../../../common/classes/properties";

interface FilterButtonProps {
    filter: CountryType | InstType | StatusType | null;
    current: CountryType | InstType | StatusType | null;
    filterClass: FilterClassType;
    icon: JSX.Element;
    activeClass: FilterClassType | null;
    handleActiveClass: (state: FilterClassType | null) => void;
}

function FilterButton(
    {filter, current, filterClass, icon, activeClass, handleActiveClass}: FilterButtonProps) {
    const dispatch = useDispatch();
    const isActive: boolean = filterClass === activeClass;
    const isSelected: boolean = filter === current;

    const onClick = useCallback(() => {
        if (isActive) {
            if (!isSelected) dispatch(setFilter(filterClass, filter));
            handleActiveClass(null);
        } else {
            handleActiveClass(filterClass)
        }
    }, [dispatch, filter, filterClass, handleActiveClass, isActive, isSelected]);


    return (
        <button
            className="FilterButton"
            style={{width: isSelected || isActive ? "3.2rem" : "0"}}
            onClick={onClick}
        >
            {icon}
        </button>
    )
}

export default React.memo(FilterButton);
