import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currState. action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'this is my text filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe(text);
});


test('should set start date', () => {
    const currState = {
        text: '',
        startDate: moment(0),
        endDate: undefined,
        sortBy: ''
    };
    const state = filtersReducer(undefined, currState);

    expect(state.startDate).toEqual(moment(0));
});

test('should set end date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: moment(0),
        sortBy: ''
    };
    const state = filtersReducer(undefined, currState)

    expect(state.endDate).toEqual(moment(0));
});


