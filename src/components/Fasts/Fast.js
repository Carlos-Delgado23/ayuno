import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Fast = (props) => {
  const { fast } = props
  if (fast) {
    return (
      <>
        <div className='mt-32 text-white text-lg font-bold'>
          fast - {fast.title}
        </div>
        <div className='mt-8 text-white text-sm'>
          {fast.body}
        </div>
      </>
    )
  } else {
    return (
      <div className='mt-32'>Loading fast...</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const fasts = state.firestore.data.fasts
  const fast = fasts ? fasts[id] : null
  return {
    fast: fast
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'fasts' }
  ])
)(Fast)