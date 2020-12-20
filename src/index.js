import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import reportWebVitals from './reportWebVitals'
import firebase from "./firebase"

import './tailwind.output.css'

import { BrowserRouter as Router, withRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers"
import { setUser, clearUser } from './actions'
import Spinner from './components/Spinner/Spinner'

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/fasts');
      } else {
        this.props.history.push('/sign-in');
        this.props.clearUser();
      }
    })
  }

  render() {
    return this.props.isLoading ?
      <Spinner /> : (
        <App />
      )
  }
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
