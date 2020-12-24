import authReducer from './authReducer'
import fastReducer from './fastReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  fast: fastReducer,
  firestore: firestoreReducer
})

export default rootReducer