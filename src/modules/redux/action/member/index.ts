import { SET_MEMBER_INFO } from "./interface";

export const setMemberInfo = (info: any) => ({
    type: SET_MEMBER_INFO,
    payload: info
})

type MemberAction = ReturnType<typeof setMemberInfo>

type memberState = {
    info: any
}

const initState: memberState = {
    info: localStorage.getItem('memberName')
}

function MemberReducer(state: memberState = initState, action: MemberAction): memberState {
    switch (action.type) {
        case SET_MEMBER_INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}
export default MemberReducer