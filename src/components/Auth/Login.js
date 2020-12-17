import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../FormInput/FormInput'

import firebase from '../../firebase'

// ICONS
import { BiEnvelope, BiLockAlt } from 'react-icons/bi'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
  }

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(singnedInUser => {
          console.log(singnedInUser)
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          })
        })
    }
  }

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'border, border-red-600' : ''
  }

  render() {
    const {
      email,
      password,
      errors,
      loading,
    } = this.state;

    return (
      <div className="flex justify-center content-center h-screen">
        <div className="w-5/6 max-w-xl my-auto p-6 bg-white-lilac rounded-xl flex flex-col justify-center items-center">

          <h1 className="text-2xl font-medium text-deep-blue">
            Sign In
        </h1>

          <h5 className="text-xs font-medium text-deep-blue mt-2 mb-6">
            New user?
          <Link to="/register" className="text-electric-violet pl-2">Create an account</Link>
          </h5>

          {errors.length > 0 && (
            <div className="text-red-600 text-center mb-6">
              <h3 className="text-lg font-bold uppercase">Error</h3>
              {this.displayErrors(errors)}
            </div>
          )}

          <form className="w-11/12" onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              placeholder="Email"
              type="text"
              onChange={this.handleChange}
              value={email}
              labelErr={`${this.handleInputError(errors, 'email')}`}
              icon={<BiEnvelope className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            >

            </FormInput>
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
              value={password}
              labelErr={`${this.handleInputError(errors, 'password')}`}
              icon={<BiLockAlt className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            />

            <button disabled={loading} className="bg-electric-violet h-12 text-white-lilac w-full rounded-3xl shadow-lg">
              <svg
                className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                width="27.233"
                height="28.92"
                viewBox="0 0 27.233 28.92">
                <path
                  id="Icon_metro-spinner"
                  data-name="Icon metro-spinner"
                  d="M14.139,5.784A3.856,3.856,0,1,1,17.995,9.64,3.856,3.856,0,0,1,14.139,5.784Zm8.18,3.388a3.856,3.856,0,1,1,3.856,3.856A3.856,3.856,0,0,1,22.319,9.172Zm5.316,8.18a1.928,1.928,0,1,1,1.928,1.928A1.928,1.928,0,0,1,27.635,17.352Zm-3.388,8.18a1.928,1.928,0,1,1,1.928,1.928A1.928,1.928,0,0,1,24.247,25.532Zm-8.18,3.388A1.928,1.928,0,1,1,18,30.849,1.928,1.928,0,0,1,16.067,28.921Zm-8.18-3.388A1.928,1.928,0,1,1,9.815,27.46a1.928,1.928,0,0,1-1.928-1.928ZM6.923,9.172a2.892,2.892,0,1,1,2.892,2.892A2.892,2.892,0,0,1,6.923,9.172Zm-2.665,8.18a2.169,2.169,0,1,1,2.169,2.169A2.169,2.169,0,0,1,4.258,17.352Z"
                  transform="translate(-4.258 -1.928)"
                  fill="#f8f8fc"
                />
              </svg>
              <p className={`font-medium text-base ${loading ? 'hidden' : 'inline-block'}`}>
                Sign In
              </p>
            </button>
          </form>

          <div className="flex justify-center items-center w-full">
            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" stroke-width="2" />
            </svg>
            </div>

            <h6 className="text-xs text-deep-blue font-medium my-6 mx-6">Or Sign In With</h6>

            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" stroke-width="2" />
            </svg>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button className="focus:outline-none">
              <svg id="google" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <rect id="Area" width="48" height="48" rx="24" fill="#13218c" />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect id="Area-2" data-name="Area" width="20" height="20" fill="rgba(0, 255, 196,0.35)" opacity="0" />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path id="Path" d="M23.139,11.375h-.806v-.042h-9v4h5.652a6,6,0,1,1-1.671-6.48l2.829-2.829a9.965,9.965,0,1,0,3,5.351Z" transform="translate(-2.333 -2.333)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                    <path id="Path-2" data-name="Path" d="M5.255,8.7l3.3,2.416a6.008,6.008,0,0,1,9.575-2.243l2.839-2.837A10.017,10.017,0,0,0,5.255,8.7Z" transform="translate(-3.098 -2.333)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                    <path id="Path-3" data-name="Path" d="M14.1,31.379a9.988,9.988,0,0,0,6.729-2.606l-3.107-2.627a6,6,0,0,1-9.283-2.768L5.167,25.9A10.026,10.026,0,0,0,14.1,31.379Z" transform="translate(-3.061 -10.379)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                    <path id="Path-4" data-name="Path" d="M29.84,16.708h-.808v-.041H20v4.014h5.672a6.041,6.041,0,0,1-2.051,2.8h0L26.727,26.1a9.706,9.706,0,0,0,3.307-7.43A10.066,10.066,0,0,0,29.84,16.708Z" transform="translate(-9.035 -7.709)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                  </g>
                </g>
              </svg>
            </button>
            <button className="focus:outline-none mx-3">
              <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <rect id="Area" width="48" height="48" rx="24" fill="#13218c" />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect id="Area-2" data-name="Area" width="20" height="20" fill="rgba(0,255,196,0.35)" opacity="0" />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path id="Path" d="M15,1.667H12.5A4.167,4.167,0,0,0,8.333,5.833v2.5h-2.5v3.334h2.5v6.666h3.334V11.667h2.5L15,8.333H11.667v-2.5A.833.833,0,0,1,12.5,5H15Z" transform="translate(1 1)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                  </g>
                </g>
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <rect id="Area" width="48" height="48" rx="24" fill="#13218c" />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect id="Area-2" data-name="Area" width="20" height="20" fill="rgba(253,73,198,0.35)" opacity="0" />
                  <g id="Icon" transform="translate(-1 -1)">
                    <path id="Path" d="M19.167,2.5A9.094,9.094,0,0,1,16.55,3.775,3.733,3.733,0,0,0,10,6.275v.833A8.884,8.884,0,0,1,2.5,3.333s-3.333,7.5,4.167,10.834A9.7,9.7,0,0,1,.833,15.833C8.333,20,17.5,15.833,17.5,6.25a3.739,3.739,0,0,0-.067-.692A6.427,6.427,0,0,0,19.167,2.5Z" transform="translate(1 1)" fill="none" stroke="#00FFC4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
                  </g>
                </g>
              </svg>

            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Login
