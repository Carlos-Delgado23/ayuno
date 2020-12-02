import React from 'react'
import Home from './Home/Home'
import './App.css'

import Navbar from './Navbar/Navbar'
import BottomNav from './BottomNav/BottomNav'
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Fasts from "./Fasts/Fasts"
import Tracker from "./Tracker/Tracker"
import Spinner from "./Spinner/Spinner"

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return this.props.isLoading ?
      <Spinner /> :
      (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/fasts" component={Fasts} />
            <Route path="/tracker" component={Tracker} />
            {/* <Route path="/recipes" component={Recipes} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings}/>
          <Route path="/about" component={About} /> */}
          </Switch>
          <BottomNav />
        </div>
      )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
