import {createAsyncAction} from "typesafe-actions";
import Room from "../../common/classes/Room";
import {AxiosError} from "axios";

export const GET_ROOMS = 'syncroom/GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'syncroom/GET_ROOMS_SUCCESS';
export const GET_ROOMS_ERROR = 'syncroom/GET_ROOMS_ERROR';

export const getRoomsAsync = createAsyncAction(
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR
)<undefined, Room[], AxiosError>();
