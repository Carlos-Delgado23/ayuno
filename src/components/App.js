import React from 'react'
import Home from './Home/Home'
import './App.css'

import Navbar from './Navbar/Navbar'
import BottomNav from './BottomNav/BottomNav'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Fasts from './Fasts/Fasts'
import Tracker from './Tracker/Tracker'
import Spinner from './Spinner/Spinner'
import Contact from './Contact/Contact'
import Profile from './Profile/Profile'
import ProfileSettings from './Profile/ProfileSettings'

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const App = ({ currentUser }) => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/fasts" render={(props) => (<Fasts {...props} currentUser={currentUser} />)} />
        {/* <Route path="/fasts" component={Fasts} /> */}
        <Route path="/tracker" component={Tracker} />
        {/* <Route path="/recipes" component={Recipes} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={ProfileSettings} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <BottomNav />
    </div>
  )

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
