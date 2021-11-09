import { combineReducers } from "redux";
import setPage from "./action/signup";

const rootReducer = combineReducers({
    setPage,
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;