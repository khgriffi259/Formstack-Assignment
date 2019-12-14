import React from 'react'
import { ADD_ITEM, REMOVE_ITEM, SORT_ITEMS, SELECT_ITEM } from '../../actionTypes'
import itemReducer from './index'
import Items from '../../../data'

describe('Item Reducer', () => {

    it('should return the default state', () => {
        const newState = itemReducer(undefined, {})
        expect(newState).toEqual({items: Items, sortMethod: 'CreatedAt'})
    })
    
    it('should return new state sorted by createdAt property if ADD_ITEM type received',() => {
        const newItem = {
            id: 4,
            title: "Go to the bank",
            createdAt: new Date(),
            active: false
        }
        const newState = itemReducer(undefined, {
            type: ADD_ITEM, 
            payload: newItem
        })

        expect(newState).toEqual({
            items: [...Items, newItem].sort((a, b) => b.createdAt - a.createdAt), 
            sortMethod: 'CreatedAt'
        })
    })

    it('should remove item from state if REMOVE_ITEM type received',() => {
        const newState = itemReducer(undefined, {
            type: REMOVE_ITEM, 
            payload: 3
        })

        expect(newState).toEqual({
            items: [Items[0], Items[1]], 
            sortMethod: 'CreatedAt'
        })
    })

    it('should set sortMethod variable in state if SORT_ITEMS type received',() => {
        const newState = itemReducer(undefined, {
            type: SORT_ITEMS, 
            payload: 'Title'
        })

        expect(newState).toEqual({
            items: Items,
            sortMethod: 'Title'
        })
    })

    it('should sort items based on sortMethod if SORT_ITEMS type received',() => {
        const newState = itemReducer(undefined, {
            type: SORT_ITEMS, 
            payload: 'CreatedAt'
        })

        expect(newState).toEqual({
            items:  [ 
                {
                    id: 3,
                    title: "carrot",
                    createdAt: new Date("10-12-2019"),
                    active: false
                },
                {
                    id: 2,
                    title: "banana",
                    createdAt: new Date("10-12-1999"),
                    active: false
                },
                {
                    id: 1,
                    title: "apple",
                    createdAt: new Date("10-12-1979"),
                    active: true
                },
            ],
            sortMethod: 'CreatedAt'
        })
    })

    it('should set active property on selected item if SELECT_ITEM type received', () => {
        const newState = itemReducer(undefined, {
            type: SELECT_ITEM, 
            payload: 3
        })

        expect(newState).toEqual({
            items:  [ 
                {
                    id: 1,
                    title: "apple",
                    createdAt: new Date("10-12-1979"),
                    active: false
                },
                {
                    id: 2,
                    title: "banana",
                    createdAt: new Date("10-12-1999"),
                    active: false
                },
                {
                    id: 3,
                    title: "carrot",
                    createdAt: new Date("10-12-2019"),
                    active: true
                }
            ],
            sortMethod: 'CreatedAt'
        })
    })


    
})