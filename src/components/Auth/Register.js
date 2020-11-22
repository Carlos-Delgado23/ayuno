import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex justify-center content-center">
      <div className="w-5/6 h-auto my-32 p-8 bg-white-lilac rounded-xl flex flex-col justify-center items-center">

        <h1 className="text-2xl font-medium text-deep-blue">
          Sign Up
        </h1>

        <h5 className="text-xs font-medium text-deep-blue mt-2 mb-6">
          Already a user?
          <Link to="/register" className="text-electric-violet pl-2">Sign In</Link>
        </h5>

        <form className="w-11/12">
          <input
            name="username"
            placeholder="Username"
            type="text"
            className="h-12 w-full rounded-xl px-3 mb-4 text-deep-blue border-deep-blue"
          />
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            className="h-12 w-full rounded-xl px-3 mb-4 text-deep-blue border-deep-blue"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="h-12 w-full rounded-xl px-3 mb-4 text-deep-blue border-deep-blue"
          />
          <input
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            type="password"
            className="h-12 w-full rounded-xl px-3 mb-4 text-deep-blue border-deep-blue"
          />

          <button className="bg-electric-violet py-2 text-white-lilac w-full rounded-3xl shadow-lg">
            Sign Up
          </button>
        </form>

      </div>
    </div>
  )
}

export default Register
