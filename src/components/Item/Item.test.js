import React from 'react'
import { shallow } from 'enzyme'
import Item from './index'
import { findByTestAttr } from '../../../Utils'

const setUp = (props = {}) => {
    const component = shallow(<Item {...props} />)
    return component
}

describe('Item component', () => {

    let component;
    beforeEach(() => {
        const props = {
            item: {
                title: 'Test title'
            }
        }
        component = setUp(props)
    })

        it('should render without errors', () => {
            const wrapper = findByTestAttr(component, 'ItemComponent')
            expect(wrapper.length).toBe(1)
        })

        it('should render an item title', () => {
            const wrapper = findByTestAttr(component, 'item-title')
            expect(wrapper.length).toBe(1)
        })
        
        it('should render a trashcan icon', () => {
            const wrapper = findByTestAttr(component, 'item-icon')
            expect(wrapper.length).toBe(1)
        })
    })

    
   

