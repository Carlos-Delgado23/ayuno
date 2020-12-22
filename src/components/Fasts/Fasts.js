import React from 'react'
import firebase from '../../firebase'
import FastModal from './FastFromModal/FastModal'
import FastCard from './FastCard'

class Fasts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fastsRef: firebase.firestore().collection('fasts'),
      fastRef: firebase.database().ref(),
      fasts: [],
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
    const { fasts } = this.state
    return (
      <div className="w-full md:w-2/3 flex flex-col justify-center content-center my-16 mx-auto px-3">
        <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3">Types of Fasts</h1>
        <FastModal />
        {
          fasts && fasts.map(fast => (
            <FastCard
              key={fast.timestamp}
              fast={fast}
            />
          ))
        }
      </div >
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     fasts: state.fast.fasts
//   }
// }

export default Fasts
