import React from 'react';
import renderer from 'react-test-renderer';
import Home from './screens/Home'


it('Render the home page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('Render the register page', () => {

})