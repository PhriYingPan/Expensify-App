import React from 'react';
import {shallow}  from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures';

test('render expense list with expenses', () => {

    const wrapper = shallow(<Expenses expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();

});

test('should render ExpenseList wotj empty masses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});