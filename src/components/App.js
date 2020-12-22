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
import Contact from './Contact/Contact'
import Profile from './Profile/Profile'
import ProfileSettings from './Profile/ProfileSettings'

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'


const App = ({ currentUser, currentFast }) => {


  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        {/* <Route path="/fasts" component={Fasts} /> */}
        <Route path="/fast/:id" component={Fast} />
        <Route path="/tracker" component={Tracker} />
        <Route path="/fasts" render={(props) => (<Fasts {...props} currentFast={currentFast} key={currentFast && currentFast.id} />)} />
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
  currentUser: state.user.currentUser,
  currentFast: state.fast.currentFast
})

export default connect(mapStateToProps)(App);
