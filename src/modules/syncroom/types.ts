import * as actions from './actions';
import {ActionType} from "typesafe-actions";
import Room from "../../common/classes/Room";

export type SyncroomAction = ActionType<typeof actions>;

export type SyncroomState = {
    rooms: {
        loading: boolean;
        error: Error | null;
        data: Room[];
    };
};
