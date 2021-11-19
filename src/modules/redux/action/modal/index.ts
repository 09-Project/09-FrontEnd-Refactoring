import { MODAL_ON, MODAL_OFF } from "./interface";

export const setModalOn = () => ({
    type: MODAL_ON
})
export const setModalOff = () => ({
    type: MODAL_OFF
})

type modalActionType = ReturnType<typeof setModalOn> | ReturnType<typeof setModalOff>

type modalState = {
    modal: boolean
}

const initState: modalState = {
    modal: false
}

function setModal(state: modalState = initState, action: modalActionType): modalState {
    switch (action.type) {
        case MODAL_ON:
            return { modal: true }
        case MODAL_OFF:
            return { modal: false }
        default:
            return state
    }
}
export default setModal