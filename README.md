# architecture-redux
architecture, architecture redux, redux

# Links
- https://learnredux.com/view/hmwBow1PUuo
- https://www.youtube.com/watch?v=1w-oQ-i1XB8&index=15&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
- https://github.com/reactjs/redux
- http://redux.js.org/
- http://tableless.com.br/bem-vindo-ao-redux/
- https://blog.coderockr.com/conhecendo-o-b%C3%A1sico-do-redux-7315bcf09cef#.lice5dxckau
- https://www.youtube.com/watch?v=DiLVAXlVYR0
- https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44#.7t5wicmmm



# Structure and Data Flow
- http://redux.js.org/docs/basics/DataFlow.html
- The data lifecycle in any Redux app follows these **4 steps**
   - _Call_ | You can _call from anywhere_ in your app
   ```
   store.dispatch(action);
   ```
   - The **Redux** **store** _calls_ the **reducer** _function_
    - You need pass _two_ _arguments_ to the **reducer**
      - _Current_ **state** tree
      - **Action**
   ```
   let previousState = {
     visible: 'SHOW_ALL',
     todos: [{
       text: 'Read the docs',
       complete: false
       }]
   };

   let action = {
     type: 'ADD_TODO',
     text: 'Understand the flow'
   };

   let nexState = todoApp(previousState, action);
   ```
- **Reducer**
  - How you structure the root reducer is completely up to you. Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree. Here’s how combineReducers() works. Let’s say you have two reducers, one for a list of todos, and another for the currently selected filter setting:
```
function todos(state = [], action) {
  // Somehow calculate it...
  return nextState
}

function visibleTodoFilter(state = 'SHOW_ALL', action) {
  // Somehow calculate it...
  return nextState
}

let todoApp = combineReducers({
  todos,
  visibleTodoFilter
})
```
- The **Redux store** _saves_ the complete state tree returned by the root **reducer**.
  - This new tree is now the next state of your app! Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.


## State
- Group of _data_ in _moment_ that your application run in client
- It is _Immutable_
- Whatever change in _data_ change the **state**
- For change the **state** is necessary emit an **action**

## Reducers
- _Send_ what do to your specific **store**
- It is _functions called_ ever that one **action** is triggered, received the _current_ **state** and  _return_ the new **state**

## Store
- Have the _all_ **state** the application
- Permit read the **state**
- Permit the **reducers** _modify_ the **state**
- _Registry_ and _manipule_ _Listeners_

## View
- It is **Components**

## Actions
- Object that send by **view** to **store**
- This is _required_ the _property_ _type_ (action that will run)

# Observations
- The three force the _REDUX_ as:
  - Only _one_ **store**
  - **State** is _imumutable_
  - Changes is do only with _pure functions_
- **Reducer** is a _pure function_
- **Middleware** run before the **store** call, to continue addd _next(action)_


# Setup

## Plugins
- Redux

# Code
## Store
```
```

## Components
```
```

## Dispatcher
```
```

## Actions
```
```

## Middlewares
  - All middlewares have been add to works
  ```
    // IMPORT
  import { applyMiddleware } from 'redux';

    // SET
  const middleware= applyMiddleware(promisse(), thunk, logger());
  ```
### Redux Logger
  - Registry logs
  ```
  import logger from 'redux-logger';
  ```
### Thunk
  - Run _async_ functions
  ```
  import thunk from 'redux-thunk';
  ```
### Promisse
  - Create automatically actions with base in result
  ```
  import promisse from 'redux-promisse';
  ```    
    - Example
      - The code down, generate the actions:
        - FECTH_USER_**PENDING**
        - FECTH_USER_**FULFILLED**
        - FECTH_USER_**REJECTED**
    ```
    store.dispatch({
      type: 'FECTH_USER',
      payload: axios.get(URL)
    })
    ```
