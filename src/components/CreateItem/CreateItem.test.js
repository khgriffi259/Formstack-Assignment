import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../Utils'
import CreateItem from './index'
import { addItem } from '../../store/actions'

const setUp = (props = {}) => {
    const component = shallow(<CreateItem {...props} />)
    return component
}

describe('Item component', () => {

    let component;
    beforeEach(() => {
        const props = {
            addItem
        }
        component = setUp(props)
    })

        it('should render without errors', () => {
            const wrapper = findByTestAttr(component, 'CreateItemComponent')
            expect(wrapper.length).toBe(1)
        })

        it('should render an input field', () => {
            const wrapper = findByTestAttr(component, 'input-field')
            expect(wrapper.length).toBe(1)
        })
        
    })

    
   

