import React from 'react'
import Home from './Home/Home'
import './App.css'

import Navbar from './Navbar/Navbar'
import BottomNav from './BottomNav/BottomNav'
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Plans from "./Plans/Plans"
import Tracker from "./Tracker/Tracker"
import Spinner from "./Spinner/Spinner"
import firebase from "../firebase"

// import './tailwind.output.css'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/plans');
      } else {
        this.props.histort.push('/home');
        this.props.clearUser();
      }
    })
  }

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
            <Route path="/plans" component={Plans} />
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

export default App;
