export const createFast = fast => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore()
    firestore.collection('fasts').add({
      ...fast,
      authorFirst: 'carlos',
      authorLast: 'delgado',
      authorId: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_FAST', fast })
    }).catch(err => {
      dispatch({ type: 'CREATE_FAST_ERROR', err })
    })

  }
}