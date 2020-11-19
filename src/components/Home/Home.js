import React from 'react'

const Home = () => {

  return (
    <div className="px-8 h-screen flex flex-col justify-center">
      <h3 className="text-white-lilac font-bold uppercase text-4xl">
        Track your progress <br />
        Read the word <br />
        Rejuvinate
      </h3>
      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className="pt-6">
        <button type="button" className="inline-flex items-center justify-center bg-electric-violet text-white-lilac active:bg-purple-600 uppercase text-sm px-10 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-150 ease-in-out" aria-label="Login" aria-expanded="false">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        Login
      </button>
      </div>

    </div>
  )
}


export default Home