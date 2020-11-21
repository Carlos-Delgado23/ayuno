import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex justify-center content-center">
      <div className="w-5/6 h-auto my-32 p-8 bg-white-lilac rounded-xl flex flex-col justify-center items-center">

        <h1 className="text-2xl font-medium text-deep-blue">
          Sign In
        </h1>

        <h5 className="text-xs font-medium text-deep-blue mt-2 mb-6">
          New user?
          <Link to="/register" className="text-electric-violet pl-2">Create an account</Link>
        </h5>

        <form className="w-11/12">
          <input
            name="username"
            placeholder="Username"
            type="text"
            className="h-12 w-full rounded-lg px-3 text-deep-blue border-deep-blue"
          />
        </form>

      </div>
    </div>
  )
}

export default Login
