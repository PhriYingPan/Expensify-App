import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {  
    onSubmit = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history}/>);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});