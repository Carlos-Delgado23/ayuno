import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Tracker extends React.Component {
  render() {
    return (
      <div className="flex justify-center content-center h-screen">
        <div className="w-5/6 my-20 max-w-xl p-6 bg-white rounded-xl flex flex-col text-deep-blue">

          <div className="bg-white-lilac flex justify-around mb-3 p-3 rounded-md">
            <div className="text-center">
              <h3 className="uppercase font-bold text-lg">DAYS</h3>
              <p>19</p>
            </div>
            <ul className="flex">
              <li className="text-center mx-2">
                <h3 className="uppercase font-bold text-lg">HRS</h3>
                <p>04</p>
              </li>
              <li className="text-center mx-2">
                <h3 className="uppercase font-bold text-lg">MINS</h3>
                <p>18</p>
              </li>
              <li className="text-center ml-2">
                <h3 className="uppercase font-bold text-lg">SECS</h3>
                <p>45</p>
              </li>
            </ul>
          </div>

          <div className="flex justify-between">
            <div className="text-center">
              <h5>STARTED</h5>
              <p>10/24</p>
              <p>5:30 PM</p>
            </div>
            <div className="text-center">
              <h5>ENDS</h5>
              <p>11/24</p>
              <p>5:30 PM</p>
            </div>
          </div>

          <div className="my-4">Progress Circle</div>

          <p className="text-center">“A generous person will prosper; whoever refreshes others will be refreshed.”</p>

          <button className="rounded-xl bg-deep-blue text-white uppercase">Finish/Start</button>

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

