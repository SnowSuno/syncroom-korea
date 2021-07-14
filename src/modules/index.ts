import {combineReducers} from "redux";

// import rooms from "./rooms";
import syncroom from "./syncroom";
import filter from "./filter";

const rootReducer = combineReducers({
    syncroom,
    filter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
