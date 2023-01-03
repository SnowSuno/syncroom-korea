import * as actions from './actions';
import {ActionType} from "typesafe-actions";
import IRoom from "../../common/classes/Room";

export type SyncroomAction = ActionType<typeof actions>;

export type SyncroomState = {
    loading: boolean;
    error: Error | null;
    rooms: IRoom[];
    users: {[name: string]: number};
};
