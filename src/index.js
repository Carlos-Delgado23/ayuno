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

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/plans');
      } else {
        this.props.history.push('/login');
        this.props.clearUser();
      }
    })
  }

  render() {
    return (
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
