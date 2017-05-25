# LINKS
- http://redux.js.org/docs/introduction/Ecosystem.html
- https://github.com/gaearon/redux-thunk
- https://github.com/reactjs/react-redux

# INSTALL
- **Install** _redux_
```shell
npm install redux --save
```


# DATA FLOW
![Data flow](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

# VIEW
- _Envia_ *ACTION**
- Se _inscreve_ na **STORE** para receber atualizações

# ACTION
- Deve ter uma **propriedade** chamada:
  - **type** no qual define qual é a **ACTION** que será executada
  - **payload** seriam os dados **state**
```javascript
action = {type, payload}
```
- **ACTIONS CREATOR** | Centralizar as **actions** deixando-as reutilizaveis
  - **Create**
```javascript
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
```
- **Usando**
```javascript
dispatch(addTodo(text))
```


# REDUCER
- Função **immutable** que recebe como parametro um **state** e uma **action**
  - É legal definir um **state** inicial, caso ele não receba nada
```javascript
function(state = [], action){
  switch(action.type){
    case 'EDIT': return {...state} || action.payload
    case 'ADD': return {...state} || action.payload
    default: return {...state} || action.payload
  }
}
```
- Criar varios **REDUCERS**
```javascript
import { combineReducers } from 'redux';

const store = createStore(combineReducers({
  reducer1,
  reducer2,
  reducer3,
}));
```


# DISPATCH
- _Recebe_ **ACTIONS**
- _Executa_ **funções**

# STORE
- É **unica** na aplicação, facilita gerencimento do **dispatcher**
- **Create store** | Recebe como parametros _funções_ que serão chamadas pelo **reducer**
```javascript
import {createStore} from 'redux';
const store = = createStore(reducers);
```
- **getState** | _Retorna_ o ultimo **state** retornado pelo **reducer** ! Quando há _objetos_ de **reducers** ele retorna o objeto;
```javascript
store.getState();
store.getState().reducerName;
```
- **DISPARA** uma **ACTION**
```javascript
store.dispatch({type: 'LIST'});
```
- Escutar eventos, recebe **callback** com a _função_ que ira executar
```javascript
let unsubscribe = store.subscribe(handleChange);
unsubscribe();
```

# PLUGINS
## REDUX THUNK
> Elimina a posibilidade de não precisar passar o *store** em todas as chamadas das funções, uma função que retorna outra função

- Install
```shell
npm install react-thunk --save
```
- Configurando
```javascript
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
```
- Usando
```javascript

// USING dispatch
store.dispatch(x(param));

function x(param){
  return dispatch => {
    dispatch({type:"list", payload})
    return payload;
  }

}
```

## REACT REDUX
> Possibilita ter acesso a **store** em todos os **componentes**

- Install
```shell
npm install react-redux --save
```

- Configurando
  - Envia a store para todo os componentes
```javascript
import { Provider } from 'react-redux';
const store;
ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Route></Route>
      </Router>
    </Provider>
  )
)
```

- Implementa um **shouldComponentUpdate(){}**, não precisa ter um **state** interno, valida quando vai atualizar o componente, no caso quando o status for diferente
  - **mapStateToProps** | Estado da  **STORE** para o **component**
  - **mapDispatchToProps** | Argumentos da  **STORE** para o **component**
```javascript
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {fotos: state.fotos}
}
const mapDispatchToProps = dispatch => {
  return {
    like: (fotoId) => {
      function();
    }
  }
}
const component = connect(mapStateToProps, mapDispatchToProps)(ComponentName);
```

# OBSERVATIONS
- Conceito de **immutable**
- NÃO USE O **contexto** _objeto GLOGAL_
