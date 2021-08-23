import {combineReducers} from "redux";

import syncroom from "./syncroom";
import modal from "./modal";
import sidebar from "./sidebar";
import filter from "./filter";
import user from "./user";

const rootReducer = combineReducers({
    syncroom,
    modal,
    sidebar,
    filter,
    user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
