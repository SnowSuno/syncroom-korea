import axios from "axios";

const SYNCROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";

const GET_ROOMS = "rooms/GET_ROOMS";
const GET_ROOMS_SUCCESS = "rooms/GET_ROOMS_SUCCESS";
const GET_ROOMS_ERROR = "rooms/GET_ROOMS_ERROR";

export const getRooms = () => async dispatch => {
    dispatch({type: GET_ROOMS});

    /** @param response.data.rooms */
    try {
        const {data: {rooms}} = await axios.get(SYNCROOM_API);
        dispatch({type: GET_ROOMS_SUCCESS, rooms});
    } catch (error) {
        dispatch({type: GET_ROOMS_ERROR, error});
    }
};

const initialState = {
    rooms: {
        loading: false,
        data: null,
        error: null
    }
};

export default function rooms(state=initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {
                ...state,
                rooms: {
                    loading: true,
                    data: state.rooms.data,
                    error: null
                }
            };
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: {
                    loading: false,
                    data: action.rooms,
                    error: null
                }
            }
        case GET_ROOMS_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state;
    }
}