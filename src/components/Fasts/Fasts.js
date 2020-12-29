import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import fbConfig from '../../fbConfig'
import FastModal from './FastFromModal/FastModal'
import FastCard from './FastCard'

class Fasts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fastsRef: fbConfig.firestore().collection('fasts'),
      fastRef: fbConfig.database().ref(),
      fastsLoading: true,
    }
  }

  render() {
    const { fasts } = this.props

    return (
      <div className="md:w-5/6 flex flex-col justify-center content-center my-16 mx-auto px-3">
        <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3">Types of Fasts</h1>
        <FastModal />

        <div className='p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
          {
            fasts && fasts.map(fast => (
              <Link to={'/fast/' + fast.id} key={fast.id} className="w-full lg:max-w-full lg:flex md:flex md:max-w-full">
                {console.log(fast)}
                <FastCard
                  fast={fast}
                />
              </Link>
            ))
          }
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fasts: state.firestore.ordered.fasts,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'fasts' }
  ])
)(Fasts)
