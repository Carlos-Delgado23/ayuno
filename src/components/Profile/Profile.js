import React from 'react'
import { connect } from 'react-redux'
import ProfileFastCard from '../Fasts/ProfileFastCard'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  state = {
    fastsArr: []
  }


  render() {
    const { fastsArr } = this.state
    const { auth, fasts } = this.props
    console.log(auth)

    fasts && fasts.map(fast => (
      auth.uid == fast.author.id
        ? fastsArr.push(fast)
        : null
    ))


    return (
      <div className="my-16 mx-auto max-w-2xl overflow-hidden shadow sm:rounded-lg">

        <img src="https://source.unsplash.com/collection/1346951/1000x300?sig=1" />

        <div className="flex justify-center -mt-8 bg-white-lilac">
          <img src="https://i.pravatar.cc/100" className="rounded-full border-solid border-white-lilac border-4 -mt-3" />
        </div>
        <div className="text-center px-3 pb-6 pt-2 bg-white-lilac">
          <h3 className="uppercase text-black text-md bolder font-sans">Carlos Delgado</h3>
          <p className="mt-2 font-sans font-light text-grey-dark">Hello, I'm from another time called the other side.</p>
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

        <div className=''>
          {
            fastsArr && fastsArr.map(fast => (
              <Link to={'/fast/' + fast.id} key={fast.id} className="w-full lg:max-w-full lg:flex md:flex md:max-w-full">
                {console.log(fast)}
                <ProfileFastCard
                  fast={fast}
                />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.firestore.ordered.fasts)
  return {
    auth: state.firebase.auth,
    fasts: state.firestore.ordered.fasts
  }
}

export default connect(mapStateToProps)(Profile)
