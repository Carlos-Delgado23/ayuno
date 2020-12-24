import * as actionTypes from '../actions/types'

const initState = {
  fasts: []
}

const fastReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_FAST:
      console.log('created fast', action.fast)
      return state
    case actionTypes.CREATE_FAST_ERROR:
      console.log('create fast error', action.err)
      return state
    default:
      return state
  }
}

export default fastReducer