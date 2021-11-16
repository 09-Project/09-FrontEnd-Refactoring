import { AxiosResponse } from "axios";
import { ACCESS_TOKEN, IS_LOGIN } from "./interface";

export const setLogin = (status: boolean) => ({
    type: IS_LOGIN,
    payload: status
})
export const setAccessToken = (token: string) => ({
    type: ACCESS_TOKEN,
    payload: token
})

type authActionType = ReturnType<typeof setLogin> | ReturnType<typeof setAccessToken>

type isLoginState = {
    isLogin: boolean;
    accessToken: string;

}

const initState: isLoginState = {
    isLogin: localStorage.getItem("access_token") ? true : false,
    accessToken: '',
}

function setIsLogin(state: isLoginState = initState, action: authActionType): isLoginState {
    switch (action.type) {
        case IS_LOGIN:
            return { ...state, isLogin: action.payload }
        case ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }
        default:
            return state
    }
}
export default setIsLogin;