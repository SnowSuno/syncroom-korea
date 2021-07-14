import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {SyncroomAction} from "./types";
import {getRooms} from "../../common/api/syncroom";
import {getRoomsAsync} from "./actions";

export function getRoomsThunk(): ThunkAction<Promise<void>, RootState, null, SyncroomAction> {
    return async dispatch => {
        const {request, success, failure} = getRoomsAsync;
        dispatch(request());
        try {
            const rooms = await getRooms();
            dispatch(success(rooms));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
