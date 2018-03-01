
const saveResult = counter => ({
  type: 'ACC',
  counter
})
export const acc = (counter) => 
  (dispatch, getState) => setTimeout(() => dispatch(saveResult(counter)), 3000)

export const remove = (id) => ({
  type: 'ACC_DELETE',
  id
})
