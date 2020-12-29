import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import FormInput from '../FormInput/FormInput'

import { VscLoading } from 'react-icons/vsc'
import SocialButton from '../CustomButton/SocialButton'

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
  }

  displayErrors = (errors) => {
    errors.map((error, i) => <p key={i}>{error.message}</p>)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.props.signIn({ email: this.state.email, password: this.state.password })
    }
  }

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'border-red-600' : ''
  }

  render() {
    const {
      email,
      password,
      errors,
      loading,
    } = this.state

    const { authError, auth } = this.props
    if (auth.uid) <Redirect to='/fasts' />

    return (
      <div className="flex justify-center content-center h-screen">
        <div className="w-5/6 max-w-xl my-auto p-6 bg-white-lilac rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium text-deep-blue">
            Sign In
        </h1>

          <h5 className="text-xs font-medium text-deep-blue mt-2 mb-6">
            New user?
          <Link to="/signup" className="text-electric-violet pl-2">Create an account</Link>
          </h5>

          {errors.length > 0 || authError
            ? <div className="text-red-600 text-center mb-6">
              <h3 className="text-lg font-bold uppercase">Error</h3>
              {authError}
              {this.displayErrors(errors)}
            </div>
            : null
          }

          <form className="w-11/12" onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              placeholder="Email Address"
              type="text"
              onChange={this.handleChange}
              value={email}
              labelErr={`${this.handleInputError(errors, 'email')}`}
              icon={'email'}
            />
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
              value={password}
              labelErr={`${this.handleInputError(errors, 'password')}`}
              icon={'password'}
            />

            <button disabled={loading} className="bg-electric-violet h-12 text-white-lilac w-full rounded-3xl shadow-lg">
              <VscLoading
                className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`} />
              <p className={`font-medium text-base ${loading ? 'hidden' : 'inline-block'}`}>
                Sign In
              </p>
            </button>
          </form>

          <div className="flex justify-center items-center w-full">
            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" strokeWidth="2" />
            </svg>
            </div>

            <h6 className="text-xs text-deep-blue font-medium my-6 mx-6">Or Sign In With</h6>

            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" strokeWidth="2" />
            </svg>
            </div>
          </div>

          <div className="flex justify-between w-3/6">
            <SocialButton tag="google" />
            <SocialButton tag="facebook" color="text-blue-700" />
            <SocialButton tag="twitter" color="text-blue-400" />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
