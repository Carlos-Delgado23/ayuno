import authReducer from './authReducer'
import fastReducer from './fastReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  fast: fastReducer
})

export default rootReducer