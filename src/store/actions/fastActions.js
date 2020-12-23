export const createFast = fast => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({ type: 'CREATE_FAST', fast })
  }
}