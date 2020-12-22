import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

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
  currentFast: null,
}

const fast_reducer = (state = initialFastState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_FAST:
      return {
        ...state,
        currentFast: action.payload.currentFast,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: user_reducer,
  fast: fast_reducer
});

export default rootReducer;