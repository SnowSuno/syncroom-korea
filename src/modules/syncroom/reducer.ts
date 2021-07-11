import {createReducer} from "typesafe-actions";
import {SyncroomState, SyncroomAction} from "./types";
import {GET_ROOMS_DATA, GET_ROOMS_DATA_SUCCESS, GET_ROOMS_DATA_ERROR} from "./actions";

const initialState: SyncroomState = {
    roomsData: {
        loading: false,
        error: null,
        data: []
    }
};

const syncroom = createReducer<SyncroomState, SyncroomAction>(initialState, {
    [GET_ROOMS_DATA]: state => ({
        ...state,
        roomsData: {
            loading: true,
            error: null,
            data: state.roomsData.data
        }
    }),
    [GET_ROOMS_DATA_SUCCESS]: (state, action) => ({
        ...state,
        roomsData: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_ROOMS_DATA_ERROR]: (state, action) => ({
        ...state,
        roomsData: {
            loading: false,
            error: action.payload,
            data: []
        }
    })
});

export default syncroom;
