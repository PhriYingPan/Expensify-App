import { createStore } from 'redux'

const add = ({a, b}) => {
    return a+b;
};

console.log(add({a:1,b:12}));

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({} = {}) => ({
    type: 'RESET',
});




// Reducer



const countReducer = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: incrementBy+1
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count-1
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };
        
        default:
            return state;
    }
    
});

const store = create

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

unsubscribe();


store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});



