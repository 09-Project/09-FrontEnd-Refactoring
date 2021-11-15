import { combineReducers } from "redux";
import setPage from "./action/signup";
import setIsLogin from "./action/auth";
import setModal from "./action/modal";
import setMyInfoReducer from "./action/myinfo";
import setUpload from "./action/upload";

const rootReducer = combineReducers({
    setpage : setPage,
    setIsLogin : setIsLogin,
    setmodal : setModal,
    myinfo : setMyInfoReducer,
    upload : setUpload
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;