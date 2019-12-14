import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, SORT_ITEMS } from '../../actionTypes'
import Items from '../../../data.js'
import uuid from 'react-uuid'

const initState = {
    items: Items,
    sortMethod: 'CreatedAt'
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItems = [ ...state.items, action.payload ]
            return state.sortMethod === 'CreatedAt'
                ? { ...state, items: newItems.sort((a, b) => b.createdAt - a.createdAt) }
                : { ...state, items: newItems.sort((a, b) => a.title > b.title ? 1 : -1) }
                 
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
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
            console.log(action.payload)
            if (action.payload === 'Title') {
                return {
                    ...state,
                    items: [...state.items].sort((a, b) => a.title > b.title ? 1 : -1),
                    sortMethod: action.payload
                } 
            } else if (action.payload === 'CreatedAt') {
                return {
                    ...state,
                    items: [...state.items].sort((a, b) => b.createdAt - a.createdAt),
                    sortMethod: action.payload
                } 
            }

        default:
            return state
    }
}

export default itemReducer