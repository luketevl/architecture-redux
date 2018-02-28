# LINKS


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

- Step1
```js
import { createStore } from 'redux';
```

# FUNCTIONS 


## Libraries
- Redux
```shell
npm install redux --save
```

# OBSERVATION
- Independent of plataform