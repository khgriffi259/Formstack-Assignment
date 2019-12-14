import React from 'react'
import { shallow } from 'enzyme'
import ItemList from './index'
import { findByTestAttr, testStore } from '../../../Utils'
import { createStore } from 'redux'
import rootReducer from '../../store/reducers'

import Items from '../../data'

const setUp = (initialState = {}) => {
    const store = createStore(rootReducer, initialState)
    const component = shallow(<ItemList store={store} />).childAt(0).dive()
    console.log(component.debug())
    return component
}

describe('Item-list component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            item: {
                items: Items,
                sorted: 'CreatedAt'
            }
        }
        wrapper = setUp(initialState)
    })

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'ItemListComponent')
        expect(component.length).toBe(1)
    })
    
})