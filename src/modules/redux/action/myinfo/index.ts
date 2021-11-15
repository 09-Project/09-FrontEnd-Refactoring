import { MY_INFO,MY_ACTIVITY } from "./interface";

export const setMyInfo = (data:myInfoState) => ({
    type : MY_INFO,
    payload : data
})

type myinfoActionType = ReturnType<typeof setMyInfo>

type myInfoState = {
    // memberId : number;
    // name : string;
    // profileUrl : string;
    // introduction : string;
    // allPostsCount : number;
    // getLikesCount : number;
    // inProgressPostsCount : number;
    // completedPostsCount : number;
    // likePostsCount : number;
    myInfoData : any;
}

const initState:myInfoState = {
    // memberId : 0,
    // name : '',
    // profileUrl : '',
    // introduction : '',
    // allPostsCount : 0,
    // getLikesCount : 0,
    // inProgressPostsCount : 0,
    // completedPostsCount : 0,
    // likePostsCount : 0,
    myInfoData : '',
}

function setMyInfoReducer(state:myInfoState = initState,action:myinfoActionType):myInfoState{
    switch (action.type){
        case MY_INFO:
            return {
                ...state,
                myInfoData : action.payload
            }
        default:
            return state
    }
}
export default setMyInfoReducer