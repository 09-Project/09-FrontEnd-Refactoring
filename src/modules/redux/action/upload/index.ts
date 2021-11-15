import {UPLOAD_TYPE,UPLOAD_IMG,TITLE,CONTENT,PRICE,TRANSACTION_REGION} from './interface'

export const setUploadType = (type:string) => ({
    type : UPLOAD_TYPE,
    payload : type
})
export const setUploadImg = (img:string) => ({
    type : UPLOAD_IMG,
    payload : img
})
export const setTitle = (title:string) => ({
    type :TITLE,
    payload : title
})
export const setContent = (content:string) => ({
    type : CONTENT,
    payload : content
})
export const setPrice = (price : number) => ({
    type : PRICE,
    payload : price
})
export const setTransctionRegion = (region:string) => ({
    type : TRANSACTION_REGION,
    payload : region
})

type uploadActionType = 
    ReturnType<typeof setUploadType> 
    | ReturnType<typeof setUploadImg> 
    | ReturnType<typeof setContent> 
    | ReturnType<typeof setPrice> 
    | ReturnType<typeof setUploadImg>
    | ReturnType<typeof setTransctionRegion>
    | ReturnType<typeof setTitle>

type uploadState = {
    type : string,
    img : string,
    title : string,
    content : string,
    price : number,
    transactionRegion : string
}

const InitailState:uploadState = {
    type : '',
    img : '',
    title : '',
    content : '',
    price : 0,
    transactionRegion : ''
}

function setUpload(state:uploadState = InitailState,action:uploadActionType) : uploadState {
    switch (action.type){
        case UPLOAD_TYPE:
            return {
                ...state,
                type : action.payload
            }
        case UPLOAD_IMG:
            return {
                ...state,
                img : action.payload
            }
        case TITLE:
            return {
                ...state,
                title : action.payload
            }
        case CONTENT:
            return {
                ...state,
                content: action.payload
            }
        case PRICE:
            return {
                ...state,
                price : action.payload
            }
        case TRANSACTION_REGION:
            return {
                ...state,
                transactionRegion : action.payload
            }
        default:
            return state
    }
}
export default setUpload
