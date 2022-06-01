import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});