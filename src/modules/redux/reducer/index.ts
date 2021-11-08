import { combineReducers } from "redux";
import modalReducer from "./auth";

const rootReducer = combineReducers({
    modal : modalReducer,
});

export type reducerType = ReturnType<typeof rootReducer>
export default rootReducer;