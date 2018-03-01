const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "INCREMENT":
      newState.counter += action.value;
    break;
    case "DECREMENT":
      newState.counter -= action.value;
    break;

    default:
      break;
  }
  return newState; 
  }

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe( () => console.log('[Subscription', store.getState()))

// Dispatching Action
store.dispatch({
  type: 'INCREMENT',
  value: 3
});
console.log(store.getState());

store.dispatch({
  type: 'DECREMENT',
  value: 1
});
console.log(store.getState());
