import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {SyncroomAction} from "./types";
import {getSyncrooms} from "../../common/api/syncroom";
import {getDataAsync} from "./actions";
import { getUsersFromRooms } from "./utils";

export function getRoomsThunk(): ThunkAction<Promise<void>, RootState, null, SyncroomAction> {
    return async dispatch => {
        const {request, success, failure} = getDataAsync;
        dispatch(request());
        try {
            const rooms = await getSyncrooms();
            dispatch(success({
                rooms: rooms,
                users: getUsersFromRooms(rooms)
            }));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
