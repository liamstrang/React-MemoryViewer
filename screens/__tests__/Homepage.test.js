import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home'
import Registration from '../Registration'
import Login from '../Login'

describe('Check Home Page', () => {
    it('Render Homepage', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree.children[1].children[0]).toBe('Picture Collections')
        expect(tree.children[2].children[0]).toBe('View and sort your favourite images!')
    })
    it('Homepage Styling', () => {
        const json = renderer.create(<Home/>).toJSON()
        expect(json.props.style[0].width).toBe('100%')
        expect(json.props.style[0].flex).toBe(1)
        expect(json.props.style[0].maxWidth).toBe(340)
        expect(json.props.style[0].alignSelf).toBe('center')
    })
})

describe('Check Register Page', () => {
    it('Render Register Page', () => {
        const tree = renderer.create(<Registration />).toJSON();
        expect(tree.children[2].type).toBe('View')
    })
    it('Render Register Image', () => {
        const tree = renderer.create(<Registration />).toJSON();
        expect(tree.children[0].props.source).toBe(1)
    })
    it('Register Styling', () => {
        const json = renderer.create(<Registration/>).toJSON()
        expect(json.props.style[0].width).toBe('100%')
        expect(json.props.style[0].flex).toBe(1)
        expect(json.props.style[0].maxWidth).toBe(340)
        expect(json.props.style[0].padding).toBe(20)
        expect(json.props.style[0].alignItems).toBe('center')
        expect(json.props.style[0].justifyContent).toBe('center')
    })
})

describe('Check Login Page', () => {
    it('Render Login Page', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.children[2].type).toBe('View')
    })
    it('Render Login Image', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.children[0].props.source).toBe(1)
    })
    it('Login Styling', () => {
        const json = renderer.create(<Login/>).toJSON()
        expect(json.props.style[0].width).toBe('100%')
        expect(json.props.style[0].flex).toBe(1)
        expect(json.props.style[0].maxWidth).toBe(340)
        expect(json.props.style[0].padding).toBe(20)
        expect(json.props.style[0].alignItems).toBe('center')
        expect(json.props.style[0].justifyContent).toBe('center')
    })
})