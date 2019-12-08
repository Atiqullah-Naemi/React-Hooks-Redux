import { BUY_BYCYCLE } from './actionTypes'

const initialState = {
    numberOfBycycles: 10
}

const bycycleReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_BYCYCLE:
            return {
                ...state,
                numberOfBycycles: state.numberOfBycycles - 1
            }
        default:
            return state
    }
}

export { bycycleReducer }