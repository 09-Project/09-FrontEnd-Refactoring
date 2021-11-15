import { combineReducers } from "redux";
import setPage from "./action/signup";
import setIsLogin from "./action/auth";
import setModal from "./action/modal";
import setMyInfoReducer from "./action/myinfo";

const rootReducer = combineReducers({
    setpage : setPage,
    setIsLogin : setIsLogin,
    setmodal : setModal,
    myinfo : setMyInfoReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;