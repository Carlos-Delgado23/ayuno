import React from 'react'
import './Spinner.css'

const Spinner = () => (
  <div className="h-screen flex flex-col justify-center items-center">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 shadow-xl"></div>
    <div className="mt-10 text-4xl text-white-lilac">Preparing plans...</div>
  </div>
);

export default Spinner
