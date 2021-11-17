import axios from "axios";

import { API_HOST } from "../../../../constant/api";
import { WISH } from "./interface";

const wishList = (): any => (
    axios.get(API_HOST + '/member/like', {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')} ` }
    }).then(res => {
        console.log(initState)
        console.log(res.data)
        return (res.data)
    })
)

const addWish = (): any => {
    wishList()
}

export const setWish = () => ({
    type: WISH
})

type myActivityAction = ReturnType<typeof setWish>

type activityState = {
    wishes: Array<any>
}

const initState: activityState = {
    wishes: localStorage.getItem('access_token') ? wishList() : []
}

function setActivity(state: activityState = initState, action: myActivityAction): activityState {
    switch (action.type) {
        case WISH:
            return {
                ...state,
                wishes: wishList()
            }
        default:
            return state
    }
}
export default setActivity