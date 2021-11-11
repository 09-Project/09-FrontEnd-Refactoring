import { ACCESS_TOKEN,IS_LOGIN } from "./interface";

export const setLogin = () => ({
    type : IS_LOGIN
})
export const setAccessToken = (token:string) => ({
    type : ACCESS_TOKEN,
    payload : token
})

type authActionType =  ReturnType<typeof setLogin> | ReturnType<typeof setAccessToken>

type isLoginState = {
    isLogin : boolean;
    accessToken : string;
}

const initState:isLoginState = {
    isLogin : localStorage.getItem("access_token") ? true : false,
    accessToken : ''
}

function setIsLogin(state : isLoginState = initState,action : authActionType):isLoginState{
    switch (action.type){
        case IS_LOGIN:
            return {...state,isLogin : !state.isLogin}
        case ACCESS_TOKEN:
            return {...state,accessToken : action.payload}
        default:
            return state
    }
}
export default setIsLogin;