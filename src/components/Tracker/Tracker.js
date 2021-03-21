import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Tracker extends React.Component {
  render() {
    return (
      <div className="flex justify-center content-center h-screen">
        <div className="w-5/6 my-20 max-w-xl p-6 bg-white-lilac rounded-xl flex flex-col">

          <div>
            Countdown
          </div>

          <div>
            <div>start</div>
            <div>end</div>
          </div>

          <div>Progress Circle</div>

          <div>Verse</div>

          <button>Finish/Start Fast</button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker)

