import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      }
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

const initialFastState = {
  // currentFast: null,
  currentFasts: [
    { id: '1', title: 'pckurdu1', content: 'first project' },
    { id: '2', title: 'pckurdu1', content: 'second project' },
    { id: '3', title: 'pckurdu1', content: 'third project' },
  ]
}

const fast_reducer = (state = initialFastState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_FAST:
      console.log('Create Fast: ', action.fast)
      return state
    case actionTypes.CREATE_FAST_ERROR:
      console.log('Create Fast Error: ', action.fast)
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: user_reducer,
  fast: fast_reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;