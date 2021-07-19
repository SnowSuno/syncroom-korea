import {createReducer} from "typesafe-actions";
import {SyncroomState, SyncroomAction} from "./types";
import {GET_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR} from "./actions";

const initialState: SyncroomState = {
    rooms: {
        loading: false,
        error: null,
        data: []
    }
};

const syncroom = createReducer<SyncroomState, SyncroomAction>(initialState, {
    [GET_ROOMS]: state => ({
        ...state,
        rooms: {
            loading: true,
            error: null,
            data: state.rooms.data
        }
    }),
    [GET_ROOMS_SUCCESS]: (state, action) => ({
        ...state,
        rooms: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_ROOMS_ERROR]: (state, action) => ({
        ...state,
        rooms: {
            loading: false,
            error: action.payload,
            data: []
        }
    })
});

export default syncroom;
