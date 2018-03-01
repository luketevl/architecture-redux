const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case "INCREMENT":
      newState.counter = state.counter + 1
    break;
    case "DECREMENT":
      newState.counter = state.counter - 1
    break;

    case "ADD":
      newState.counter = state.counter + action.value
    break;
    case "SUB":
      newState.counter = state.counter - action.value
    break;
    default:
    break;
  }
 
  return newState;
}
export default reducer;