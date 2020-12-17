import React from 'react'
import firebase from '../../firebase'
// import md5 from 'md5'
import { Link } from 'react-router-dom'

import FormInput from '../FormInput/FormInput'
import SocialButton from '../CustomButton/SocialButton'

// ICONS
import { BiUser, BiEnvelope, BiLockAlt, BiRevision } from 'react-icons/bi'
import { VscLoading } from 'react-icons/vsc'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref('users'),
  }

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: 'Fill in all fields' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: 'Password is invalid' };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length;
  }


  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  }

  displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          createdUser.user.updateProfile({
            displayName: this.state.username,
          })
            .then(() => {
              this.saveUser(createdUser).then(() => {
                console.log('user saved');
              })
            })
            .catch(err => {
              console.error(err);
              this.setState({ errors: this.state.errors.concat(err), loading: false });
            })
        })
        .catch(err => {
          console.error(err);
          this.setState({ errors: this.state.errors.concat(err), loading: false });
        });
    }
  }

  saveUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid)
      .set({
        name: createdUser.user.displayName,
      })
  }

  handleInputError = (errors, inputName) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(inputName)
    )
      ? 'text-red-600'
      // change **error** to a color for tailwind border input
      : ''
  }

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading,
    } = this.state;

    return (
      <div className="flex justify-center content-center h-screen">
        <div className="w-5/6 max-w-xl my-auto p-6 bg-white-lilac rounded-xl flex flex-col justify-center items-center">

          <h1 className="text-2xl font-medium text-deep-blue">
            Sign Up
        </h1>

          <h5 className="text-xs font-medium text-deep-blue mt-2 mb-6">
            Already a user?
          <Link to="/login" className="text-electric-violet pl-2">Sign In</Link>
          </h5>

          <form className="w-11/12" onSubmit={this.handleSubmit}>
            <FormInput
              name="username"
              placeholder="Username"
              type="text"
              onChange={this.handleChange}
              value={username}
              icon={<BiUser className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            />
            <FormInput
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={this.handleChange}
              value={email}
              labelErr={`${this.handleInputError(errors, 'email')}`}
              icon={<BiEnvelope className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            />
            <FormInput
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
              value={password}
              labelErr={`${this.handleInputError(errors, 'password')}`}
              icon={<BiLockAlt className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            />
            <FormInput
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              type="password"
              onChange={this.handleChange}
              value={passwordConfirmation}
              labelErr={`${this.handleInputError(errors, 'password')}`}
              icon={<BiRevision className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />}
            />

            <button disabled={loading} className="bg-electric-violet h-12 text-white-lilac w-full rounded-3xl shadow-lg">
              <VscLoading
                className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`} />
              <p className={`font-medium text-base ${loading ? 'hidden' : 'inline-block'}`}>
                Sign Up
              </p>
            </button>
          </form>
          {errors.length > 0 && (
            <div className="text-red-600 text-center mt-4">
              <h3 className="text-lg font-bold uppercase">Error</h3>
              {this.displayErrors(errors)}
            </div>
          )}
          <div className="flex justify-center items-center w-full">
            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" stroke-width="2" />
            </svg>
            </div>

            <h6 className="text-xs text-deep-blue font-medium my-6 mx-6">Or Sign Up With</h6>

            <div className="hidden sm:block"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" viewBox="0 0 100 2">
              <line id="Line" x2="100" transform="translate(0 1)" fill="none" stroke="#13218c" stroke-width="2" />
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

export default Register
