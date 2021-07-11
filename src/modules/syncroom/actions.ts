import {createAsyncAction} from "typesafe-actions";
import {RoomData} from "../../common/api/syncroom";
import {AxiosError} from "axios";

export const GET_ROOMS_DATA = 'syncroom/GET_ROOMS_DATA';
export const GET_ROOMS_DATA_SUCCESS = 'syncroom/GET_ROOMS_DATA_SUCCESS';
export const GET_ROOMS_DATA_ERROR = 'syncroom/GET_ROOMS_DATA_ERROR';

export const getRoomsDataAsync = createAsyncAction(
    GET_ROOMS_DATA,
    GET_ROOMS_DATA_SUCCESS,
    GET_ROOMS_DATA_ERROR
)<undefined, RoomData[], AxiosError>();
