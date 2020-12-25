import React from 'react'
import Home from './Home/Home'
import './App.css'

import Navbar from './Navbar/Navbar'
import BottomNav from './BottomNav/BottomNav'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Fasts from './Fasts/Fasts'
import Fast from './Fasts/Fast'
import Tracker from './Tracker/Tracker'
import Recipes from './Recipes/Recipes'
import Contact from './Contact/Contact'
import Profile from './Profile/Profile'
import ProfileSettings from './Profile/ProfileSettings'

import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'


const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoute path="/fasts" component={Fasts} />
        <PrivateRoute path="/fast/:id" component={Fast} />
        <PrivateRoute path="/tracker" component={Tracker} />
        <PrivateRoute path="/recipes" component={Recipes} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/settings" component={ProfileSettings} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <BottomNav />
    </div>
  )

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentFast: state.fast.currentFast
})

export default connect(mapStateToProps)(App);
