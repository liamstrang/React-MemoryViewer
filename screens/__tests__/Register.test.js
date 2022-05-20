import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../Registration'

test('Register Snapshop', () => {
    const tree = renderer.create(<Registration />).toJSON();
    expect(tree).toMatchSnapshot();
});

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