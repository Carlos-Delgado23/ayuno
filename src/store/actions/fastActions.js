export const createFast = fast => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore.collection('fasts').add({
      ...fast,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_FAST', fast })
    }).catch(err => {
      dispatch({ type: 'CREATE_FAST_ERROR', err })
    })
  }
}