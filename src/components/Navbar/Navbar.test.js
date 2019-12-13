import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './index'
import { findByTestAttr } from '../../../Utils'
const setUp = (props = {}) => {
    const component = shallow(<Navbar {...props} />)
    return component
}

describe('Navbar component', () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'Navbar')
        expect(wrapper.length).toBe(1)
    })
    
    it('should render a title', () => {
        const wrapper = findByTestAttr(component, 'title')
        expect (wrapper.length).toBe(1)
    })

})