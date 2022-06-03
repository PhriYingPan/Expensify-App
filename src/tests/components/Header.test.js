// react-test-renderer

import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});


test('should call startLogout on button click', () =>{
    // const startLogout = hest.fn();
    // const wrapper = shallow(<Header startLogout={startLogout})
});

test('should call startLogin on button click', () =>{

});