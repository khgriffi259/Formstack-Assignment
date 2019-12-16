import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, SORT_ITEMS } from '../../actionTypes'
import Items from '../../../data.js'
import uuid from 'react-uuid'
import { createSelector } from 'reselect'

const initState = {
    items: Items,
    sortMethod: 'CreatedAt'
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }
                 
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload),
            }
            
            case SELECT_ITEM:
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload
                        ? {...item, active: true }
                        : {...item, active: false }
                        )
                    }

        case SORT_ITEMS:
            if (action.payload === 'Title') {
                return {
                    ...state,
                    sortMethod: action.payload
                } 
            } else if (action.payload === 'CreatedAt') {
                return {
                    ...state,
                    sortMethod: action.payload
                } 
            }
            return state

        default:
            return state
    }
}

    export const selectItemList = state => state.items
    
    export const selectSortMethod = state => state.sortMethod
    
    export const getSortedRooms = createSelector(
        selectItemList,
        selectSortMethod,
        (itemList, sortMethod) => 
        sortMethod === 'Title'
                ? [...itemList].sort((a, b) => a.title > b.title ? 1 : -1)
                : [...itemList].sort((a, b) => b.createdAt - a.createdAt)
    )

export default itemReducer