import { combineReducers } from "redux";
import setPage from "./action/signup";
import setIsLogin from "./action/auth";
import setModal from "./action/modal";
const rootReducer = combineReducers({
    setpage : setPage,
    setIsLogin : setIsLogin,
    setmodal : setModal
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;