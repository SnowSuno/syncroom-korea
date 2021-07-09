import {combineReducers} from "redux";

import rooms from "./rooms";
import filter from "./filter";

const rootReducer = combineReducers({rooms, filter});

export default rootReducer;