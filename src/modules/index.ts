import {combineReducers} from "redux";

import syncroom from "./syncroom";
import modal from "./modal";
import sidebar from "./sidebar";
import filter from "./filter";

const rootReducer = combineReducers({
    syncroom,
    modal,
    sidebar,
    filter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
