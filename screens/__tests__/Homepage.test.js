import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home'
import Registration from '../Registration'

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
})
