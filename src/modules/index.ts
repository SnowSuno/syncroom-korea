import {combineReducers} from "redux";

import syncroom from "./syncroom";
import modal from "./modal";
import filter from "./filter";

const rootReducer = combineReducers({
    syncroom,
    modal,
    filter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
