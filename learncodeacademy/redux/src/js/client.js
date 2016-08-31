import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promisse from 'redux-promisse'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case 'FETCH_USERS_PENDING': {
      return {...state, fetching: true}
      break;
    }
    case 'RECEIVE_REJECTED':{
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'RECEIVE_USERS_FULFILLED':{
      return {...state, fetching: fale, fetched: true, users: action.payload}
      break;
    }
  }
  return state;
}

/*const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}*/

const middleware= applyMiddleware(promisse(), thunk, logger());

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wsterr/users")
})

/*store.dispatch(dispatch => {
  dispatch({type: 'FETCH_USERS_START'});
    axios.get("http://rest.learncode.academy/api/wsterr/users").then(res => {
      dispatch({type: 'RECEIVE_USERS', payload: res.data});
    }).catch(err => {
      dispatch({type: 'RECEIVE_USERS_ERROR', payload: err});
    })

}); */

//store.dispatch({type: 'INC', payload: 1});
