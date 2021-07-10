export const country = Object.freeze({
    ALL: 'country/all',
    KOREA: 'country/korea',
    JAPAN: 'country/japan'
});

export const inst = Object.freeze({
    ALL: 'inst/all',
    VOCAL: 'inst/vocal',
    GUITAR: 'inst/guitar',
    BASS: 'inst/bass',
    KEYS: 'inst/keys',
    DRUMS: 'inst/drums'
});

export const status = Object.freeze({
    ALL: 'status/ALL',
    PUBLIC: 'status/PUBLIC',
    PRIVATE: 'status/PRIVATE'
});


const SET_COUNTRY = "filter/SET_COUNTRY";
const SET_INST = "filter/SET_INST";
const SET_STATUS = "filter/SET_STATUS";


export const setCountry = country => ({type: SET_COUNTRY, country});
export const setInst = inst => ({type: SET_INST, inst});
export const setStatus = status => ({type: SET_STATUS, status});


const initialState = {
    country: country.ALL,
    inst: inst.ALL,
    status: status.ALL
};

export default function filter(state=initialState, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                country: action.country
            };

        case SET_INST:
            return {
                ...state,
                inst: action.inst
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state
    }
}



