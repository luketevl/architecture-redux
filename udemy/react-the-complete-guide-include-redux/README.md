# LINKS
- http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
- http://redux.js.org/
- http://redux.js.org/docs/introduction/CoreConcepts.html
- http://redux.js.org/docs/basics/Actions.html
- http://redux.js.org/docs/basics/Reducers.html
- http://redux.js.org/docs/FAQ.html
- http://redux.js.org/docs/advanced/Middleware.html
- https://github.com/gaearon/redux-thunk
- http://redux.js.org/docs/advanced/AsyncActions.html

## FLOW
![Flow](https://i.imgur.com/wrbXtD6.png)
## STATE
- Control the UI, control render
![State](https://i.imgur.com/uPFB5gM.png)

- Management **state** are **complex**
![APP STATE](https://i.imgur.com/f9LfbUO.png)


## REDUCERS
- Receive action and **update state** _(pure, sync functions, no side effects)_
- Combine reducers 
- Return **new state**
```js

const initialState = {
  counter: 0
}
// Reducer
const rootReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "INCREMENT":
    newState.counter += action.value;
      break;
    default:
      break;
  }
  return newState; 
  }
```

## STORES
- Stores entire application state
- Create **Stores**
  - **required** **reducer**
```js
// store
const store = createStore(rootReducer);
```
## SUBSCRIPTION
- Execute function when **state** are **updated**
```js
// Subscription
store.subscribe( () => console.log('[Subscription', store.getState()))
```

## DISPATCHES
- Call the actions
  - send **type** is required
  - send **payloads** are optional
```js
// Dispatching Action
store.dispatch({
  type: 'INCREMENT',
  payload: {},
  value: 1,
});
```

## ACTIONS
- Have **type** and **payloads**


# CONNECTING REDUX AND REACT

-Step 1
  - Create the **reducer**
```js
const initialState = {};
const reducer = (state, action) => return ...state;
```

- Step 2
  - Create te **store**
```js
import { createStore, combineReducers } from 'redux';
const reducerCombine = combineReducers(
  {
    r1: reducer1,
    rr2: reducer2
  }
);

const store = createStore(reducerCombine);
```

- Step 4
  - Install lib
```shell
yarn add react-redux --save
```
  - Connect **store** to **react** in the wrapper
```js
import {  Provider } from 'react-redux';
<Provider store={store}>
  <App />
</Provider>
```
  - Connect component
    - **mapStateToProps(state)** | Define the state that your component needed.
    - connect(mapStateToProps, )(Component);
```js
import { connect } from 'react-redux';
class Counter extends Component{}

const mapStateToProps = state => ({
  ctr: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch({
        type: 'INCREMENT'
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

- Step 5
  - Create the **action**
```js
export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})

export const add = (value) => ({
  type: 'ADD',
  value
})

export const sub = (value) => ({
  type: 'SUB',
  value
})
```
- Step 6
  - Remove the methods in component **mapDispatchToProps**.
```js
// bad
const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch({
        type: 'INCREMENT'
    })
});

// good
import * as counterAction from '../../actions/counterActions';

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch(counterAction.increment()),
});
```

![Types of state](https://i.imgur.com/BJDVNvI.png)
![Where to put the logic](https://i.imgur.com/cLGOlXJ.png)

# MIDDLEWARES
![Middleware](https://i.imgur.com/N5mWlyL.png)

- Creating middleware
```js
import { applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log(`[middleware] Dispathing`, action);
  const result = next(action);
  console.log(`[middleware] next state`, store.getState());
  return result;
}

const store = createStore(reducers, applyMiddleware(logger));
```

## REDUX THUNK
```js
import thunk from 'redux-thunk';
```

## Libraries
- Redux
```shell
npm install redux --save
```
- React Redux
```shell
npm install react-redux --save
```

- Redux Thunk
  - For asynchronous code
```shell
npm install redux-thunk --save
```


# OBSERVATION
- Independent of plataform
- **Action**
  - Create file **actionTypes** to types name