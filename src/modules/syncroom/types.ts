import * as actions from './actions';
import {ActionType} from "typesafe-actions";
import RoomType from "../../common/classes/Room";

export type SyncroomAction = ActionType<typeof actions>;

export type SyncroomState = {
    loading: boolean;
    error: Error | null;
    rooms: RoomType[];
    users: {[name: string]: number};
};
