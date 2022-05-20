import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login'

test('Login Snapshop', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});

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