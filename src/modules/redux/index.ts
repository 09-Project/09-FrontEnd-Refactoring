import { combineReducers } from "redux";
import setPage from "./action/signup";
import setIsLogin from "./action/auth";
import setModal from "./action/modal";
import setActivity from "./action/myactivity";

const rootReducer = combineReducers({
    setpage: setPage,
    setIsLogin: setIsLogin,
    setmodal: setModal,
    setActivity: setActivity
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;