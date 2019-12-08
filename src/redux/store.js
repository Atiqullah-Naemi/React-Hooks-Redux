import { createStore } from 'redux'
import { bycycleReducer } from './bycycle/bycycleReducer'

const store = createStore(bycycleReducer)

export default store