import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render() {
    const { auth } = this.props
    console.log(auth)

    return (
      <div className="my-16 mx-auto rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className="w-full" />
        <div className="flex justify-center -mt-8 bg-white-lilac">
          <img src="https://i.pravatar.cc/100" className="rounded-full border-solid border-white border-2 -mt-3" />
        </div>
        <div className="text-center px-3 pb-6 pt-2 bg-white-lilac">
          <h3 className="text-black text-sm bold font-sans">Carlos Delgado</h3>
          <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark bg-white-lilac">
          <div className="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Fasts</span>
          </div>
          <div className="text-center">
            <h2>42</h2>
            <span>Friends</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Profile)
