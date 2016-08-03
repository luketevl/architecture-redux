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

# Structure and Data Flow
- http://redux.js.org/docs/basics/DataFlow.html

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
- _Registry_ and _manipule_ _Linteners_

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

# Setup

## Plugins
- Redux

# Code
## Stores
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
