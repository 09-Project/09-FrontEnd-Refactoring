import { combineReducers } from "redux";
import setPage from "./action/signup";
import setIsLogin from "./action/auth";
import setModal from "./action/modal";
import setActivity from "./action/myactivity";
import PageReducer from "./action/page";

const rootReducer = combineReducers({
    setpage: setPage,
    setIsLogin: setIsLogin,
    setmodal: setModal,
    setActivity: setActivity,
    setPage: PageReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;