const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case "ACC":
    newState.results = newState.results.concat({id: new Date(), value: action.counter});
    break;
    
    case "ACC_DELETE":
      newState.results = newState.results.filter(result => result.id !== action.id);
    break;
    
    default:
    break;
  }
 
  return newState;
}
export default reducer;