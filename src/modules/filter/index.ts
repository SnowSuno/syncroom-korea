import {CountryType, InstType, StatusType} from "../../common/classes/types";

const SET_SEARCH = 'filter/SET_SEARCH' as const;
const SET_COUNTRY = 'filter/SET_COUNTRY' as const;
const SET_INST = 'filter/SET_INST' as const;
const SET_STATUS = 'filter/SET_STATUS' as const;

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    filter: search
});
export const setCountry = (country: CountryType) => ({
    type: SET_COUNTRY,
    filter: country
});
export const setInst = (inst: InstType) => ({
    type: SET_INST,
    filter: inst
});
export const setStatus = (status: StatusType) => ({
    type: SET_STATUS,
    filter: status
});

type FilterAction =
    | ReturnType<typeof setSearch>
    | ReturnType<typeof setCountry>
    | ReturnType<typeof setInst>
    | ReturnType<typeof setStatus>;

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
        case SET_COUNTRY:
            return {
                ...state,
                country: action.filter
            };
        case SET_INST:
            return {
                ...state,
                inst: action.filter
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.filter
            };
        default:
            return state;
    }
}

export default filter;
