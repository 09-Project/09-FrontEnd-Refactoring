import {SIGNUPPAGE,CHAGEPASSWORD} from './interface';
import { createAction } from 'typesafe-actions';

export const setSignUpPage = () => ({
    type : SIGNUPPAGE
})

export const setChangePassword = () => ({
    type : CHAGEPASSWORD
})

type signupActionType = ReturnType<typeof setSignUpPage> | ReturnType<typeof setChangePassword>

type signUpState = {
    page : string
}

const initState:signUpState = {
    page : ''
}

function setPage (state:signUpState = initState,action:signupActionType):signUpState {
    switch (action.type){
        case SIGNUPPAGE:
            return {page : 'signupPage'}
        case CHAGEPASSWORD:
            return {page : 'changePasswordPage'}
        default:
            return state
    }
}
export default setPage;