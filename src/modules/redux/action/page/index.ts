import { SIGN_UP_PAGE } from "./interface";

export const setSignuUp = (page: string) => ({
    type: SIGN_UP_PAGE,
    payload: page
})

type pageAction = ReturnType<typeof setSignuUp>

interface PageState {
    page: string
}

const initState: PageState = {
    page: ''
}

function PageReducer(state: PageState = initState, action: pageAction): PageState {
    switch (action.type) {
        case SIGN_UP_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}
export default PageReducer;