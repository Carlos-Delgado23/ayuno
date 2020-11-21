import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Navbar from './components/Navbar/Navbar'
import BottomNav from './components/BottomNav/BottomNav'
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Plans from "./components/Plans/Plans"
import Tracker from "./components/Tracker/Tracker"
import Spinner from "./components/Spinner/Spinner"
import reportWebVitals from './reportWebVitals'
import firebase from "./firebase"

import './tailwind.output.css'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers"
import { setUser, clearUser } from './actions'

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  render() {
    return (
      <App />
    )
  }
  //   componentDidMount() {
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         this.props.setUser(user);
  //         this.props.history.push('/plans');
  //       } else {
  //         this.props.histort.push('/home');
  //         this.props.clearUser();
  //       }
  //     })
  //   }

  //   render() {
  //     return this.props.isLoading ?
  //       <Spinner /> :
  //       (
  //         <div>
  //           <Navbar />
  //           <Switch>
  //             <Route exact path="/home" component={App} />
  //             <Route path="/login" component={Login} />
  //             <Route path="/register" component={Register} />
  //             <Route path="/plans" component={Plans} />
  //             <Route path="/tracker" component={Tracker} />
  //             {/* <Route path="/recipes" component={Recipes} />
  //           <Route path="/profile" component={Profile} />
  //           <Route path="/settings" component={Settings}/>
  //           <Route path="/about" component={About} /> */}
  //           </Switch>
  //           <BottomNav />
  //         </div>
  //       )
  //   }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
})

const RootWithAuth = withRouter(
  connect(
    mapStateToProps,
    { setUser, clearUser }
  )(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
