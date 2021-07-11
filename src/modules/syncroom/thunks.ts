import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {SyncroomAction} from "./types";
import {getRoomsData} from "../../common/api/syncroom";
import {getRoomsDataAsync} from "./actions";

export function getRoomsDataThunk(): ThunkAction<Promise<void>, RootState, null, SyncroomAction> {
    return async dispatch => {
        const {request, success, failure} = getRoomsDataAsync;
        dispatch(request());
        try {
            const roomsData = await getRoomsData();
            dispatch(success(roomsData));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
