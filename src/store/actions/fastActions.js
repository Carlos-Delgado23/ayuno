import * as actionTypes from './types'

export const createFast = (fast) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore.collection('fasts').add({
      ...fast,
      author: {
        fName: profile.firstName,
        lName: profile.lastName,
        id: authorId,
      },
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: actionTypes.CREATE_FAST, fast })
    }).catch(err => {
      dispatch({ type: actionTypes.CREATE_FAST_ERROR, err })
    })
  }
}


