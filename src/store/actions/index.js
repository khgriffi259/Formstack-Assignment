import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, SORT_ITEMS } from '../actionTypes'
import uuid from 'react-uuid'

export const addItem = item => {
    const newItem = {
        id: uuid(),
        title: item,
        createdAt: new Date(),
        active: false
    }

    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export const removeItem = id => ({
        type: REMOVE_ITEM,
        payload: id
})

export const selectItem = id => ({
    type: SELECT_ITEM,
    payload: id
})

export const sortItems = option => ({
    type: SORT_ITEMS,
    payload: option
})