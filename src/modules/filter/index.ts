import {CountryType, InstType, StatusType} from "../../common/classes/properties";
import {FilterClassType} from "./types";

const SET_SEARCH = 'filter/SET_SEARCH' as const;
const SET_FILTER = 'filter/SET_FILTER' as const;

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    filter: search
});
export const setFilter = (
    filterClass: FilterClassType,
    filter: CountryType | InstType | StatusType | null
) => ({
    type: SET_FILTER,
    filterClass: filterClass,
    filter: filter
});

type FilterAction =
    | ReturnType<typeof setSearch>
    | ReturnType<typeof setFilter>;

type FilterState = {
    search: string,
    country: CountryType | null,
    inst: InstType | null,
    status: StatusType | null
};

const initialState: FilterState = {
    search: '',
    country: null,
    inst: null,
    status: null
};

function filter(
    state: FilterState = initialState,
    action: FilterAction
): FilterState {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.filter
            };
        case SET_FILTER:
            return {
                ...state,
                [action.filterClass]: action.filter
            }
        default:
            return state;
    }
}

export default filter;
