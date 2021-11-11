import { ACCESS_TOKEN,IS_LOGIN } from "./interface";

export const setLogin = () => ({
    type : IS_LOGIN
})

type authActionType =  ReturnType<typeof setLogin>

type isLoginState = {
    isLogin : boolean;
}

const initState:isLoginState = {
    isLogin : false
}

function setIsLogin(state : isLoginState = initState,action : authActionType):isLoginState{
    switch (action.type){
        case IS_LOGIN:
            return {isLogin : !state.isLogin}
        default:
            return state
    }
}
export default setIsLogin;