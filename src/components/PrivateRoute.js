import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={props =>
        auth.uid
          ? (<Component {...props} />)
          : (<Redirect to='/signin' />)
      } />
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(PrivateRoute)