import moment from 'moment';

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sort: 'data',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
            
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: actions.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: actions.endDate
            }
  
        default:
            return state;
    }
}