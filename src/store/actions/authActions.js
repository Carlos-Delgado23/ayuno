import * as actionTypes from './types'

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGIN_ERROR, err })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS })
      }).catch(err => {
        dispatch({ type: actionTypes.SIGNOUT_ERROR, err })
      })
  }
}

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = getFirebase().firestore()

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      ).then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName
        })
      }).then(() => {
        dispatch({ type: actionTypes.SIGNUP_SUCCESS })
      }).catch(err => {
        dispatch({ type: actionTypes.SIGNUP_ERROR, err })
      })
  }
}