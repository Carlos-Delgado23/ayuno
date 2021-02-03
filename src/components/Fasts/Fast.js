import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Fast = (props) => {
  const { fast } = props
  if (fast) {
    return (
      <>
        <div className="w-full md:w-2/3 flex flex-col items-center px-3">
          <div className="flex flex-col shadow my-4">
            {/* Article Image */}
            <a href="#" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
              <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{fast.title}</a>
              <p href="#" className="text-sm pb-8">
                By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
      </p>
              <h1 className="text-2xl font-bold pb-3">Description</h1>
              <p className="pb-3">{fast.body}</p>
            </div>
          </div>
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