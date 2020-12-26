import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals'
import firebase from "firebase/app"
import fbConfig from './fbConfig'
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance, firestoreReducer } from 'redux-firestore';

import './tailwind.output.css'
import App from './components/App'
import Spinner from './components/Spinner/Spinner'

import rootReducer from "./store/reducers/rootReducer"
import { setUser, clearUser } from './store/actions/index'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
)

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/fasts');
      } else {
        this.props.history.push('/signin');
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
)

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase,
  config: fbConfig && profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <RootWithAuth />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
