import { combineReducers } from "redux";

import modal from "./modal";
import sidebar from "./sidebar";

const rootReducer = combineReducers({
  modal,
  sidebar,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
