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