import * as actionTypes from '../actions/types'

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log('Signin Success')
      return {
        ...state,
        authError: null
      }
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed'
      }
    case actionTypes.SIGNOUT_SUCCESS:
      console.log('Signout Success')
      return state
    case actionTypes.SIGNUP_SUCCESS:
      console.log('Signup Success')
      return {
        ...state,
        authError: null
      }
    case actionTypes.SIGNUP_ERROR:
      console.log('Signup Error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer