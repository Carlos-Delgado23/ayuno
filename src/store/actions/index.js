import * as actionTypes from './types'

// User Actions
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  }
}

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  }
}

// Fast Actions
export const setCurrentFast = fast => {
  return {
    type: actionTypes.SET_CURRENT_FAST,
    payload: {
      currentFast: fast
    }
  }
}

export const createFast = fast => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore()
    firestore.collection('fasts').add({
      ...fast,
      authorName: 'carlos',
      authorId: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: actionTypes.CREATE_FAST, fast })
    }).catch((err) => {
      dispatch({ type: actionTypes.CREATE_FAST_ERROR, err })
    })
  }
}