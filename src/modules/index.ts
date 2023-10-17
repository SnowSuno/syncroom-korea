import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import syncroom from "./syncroom";
import modal from "./modal";
import sidebar from "./sidebar";
import filter from "./filter";
import user from "./user";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  syncroom,
  modal,
  sidebar,
  filter,
  user,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
