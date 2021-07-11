import * as actions from './actions';
import {ActionType} from "typesafe-actions";
import {RoomData} from "../../common/api/syncroom";

export type SyncroomAction = ActionType<typeof actions>;

export type SyncroomState = {
    roomsData: {
        loading: boolean;
        error: Error | null;
        data: RoomData[];
    };
};
