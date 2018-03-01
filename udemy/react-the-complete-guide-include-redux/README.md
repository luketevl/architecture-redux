# LINKS
- http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
- http://redux.js.org/
- http://redux.js.org/docs/introduction/CoreConcepts.html
- http://redux.js.org/docs/basics/Actions.html
- http://redux.js.org/docs/basics/Reducers.html
- http://redux.js.org/docs/FAQ.html


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

- Step 3
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

![Types of state](https://i.imgur.com/BJDVNvI.png)


# FUNCTIONS 


## Libraries
- Redux
```shell
npm install redux --save
```

# OBSERVATION
- Independent of plataform
- **Action**
  - Create file **actionTypes** to types name