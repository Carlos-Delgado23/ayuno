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

  addFastListener = () => {
    let loadedFasts = []
    this.state.fastsRef.get().then(snap => {
      snap.forEach(doc => {
        loadedFasts.push(doc.data())
        this.setState({
          fasts: loadedFasts,
          fastsLoading: false,
        })
      })
    })
  }

  componentDidMount() {
    this.addFastListener()
  }

  render() {
    const { fasts } = this.props

    return (
      <div className="w-full md:w-2/3 flex flex-col justify-center content-center my-16 mx-auto px-3">
        <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3">Types of Fasts</h1>
        <FastModal />
        {
          fasts && fasts.map(fast => (
            <Link to={'/fast/' + fast.id}>
              <FastCard
                key={fast.id}
                fast={fast}
              />
            </Link>
          ))
        }
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fasts: state.firestore.ordered.fasts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'fasts' }
  ])
)(Fasts)
