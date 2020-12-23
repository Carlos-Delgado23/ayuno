import authReducer from './authReducer'
import fastReducer from './fastReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  fast: fastReducer
})

export default rootReducer