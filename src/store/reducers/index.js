import { combineReducers } from 'redux'
import itemReducer, * as fromItem from './item'

export default combineReducers({
    item: itemReducer
})

export const getSortedRooms = state => fromItem.getSortedRooms(state.item)