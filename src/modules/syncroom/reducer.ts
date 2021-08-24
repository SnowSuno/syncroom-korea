import {createReducer} from "typesafe-actions";
import {SyncroomState, SyncroomAction} from "./types";
import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR} from "./actions";

const initialState: SyncroomState = {
    loading: false,
    error: null,
    rooms: [],
    users: []
};

const syncroom = createReducer<SyncroomState, SyncroomAction>(initialState, {
    [GET_DATA]: state => ({
        ...state,
        loading: true,
        error: null,
    }),
    [GET_DATA_SUCCESS]: (state, action) => ({
        loading: false,
        error: null,
        rooms: action.payload.rooms,
        users: action.payload.users
    }),
    [GET_DATA_ERROR]: (state, action) => ({
        loading: false,
        error: action.payload,
        rooms: [],
        users: []
    })
});

export default syncroom;
