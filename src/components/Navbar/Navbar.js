import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
// import { Transition } from '@headlessui/react'

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    return props.history.listen(() => {
      setIsMenuOpen(false)
    })
  })

  return (
    <nav className="bg-deep-blue fixed inset-x-0 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex-1 flex items-center justify-start sm:items-stretch">

            <Link to="/home" className="w-auto font-logoTwo text-4xl text-white-lilac">AYUNO</Link>

            <div className="flex items-center hidden sm:block sm:ml-6">
              <div className="flex items-center mt-3">
                <Link to="/home" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white-lilac bg-electric-violet hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Home</Link>
                <Link to="/fasts" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Fasts</Link>
                <Link to="/tracker" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Tracker</Link>
                <Link to="/about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">About Us</Link>
              </div>
            </div>
          </div>




          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" aria-label="Notifications">
              {/*  Heroicon name: bell  */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet focus:text-white-lilac transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              {/*  Icon when menu is closed. */}
              {/*
              Heroicon name: menu
  
              Menu open: "hidden", Menu closed: "block"
             */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*  Icon when menu is open. 
              Heroicon name: x
  
              Menu open: "block", Menu closed: "hidden"
             */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*
      Mobile menu, toggle classes based on menu state.
  
      Menu open: "block", Menu closed: "hidden"
     */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Home</Link>
          <Link to="/fasts" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Fasts</Link>
          <Link to="/tracker" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">Tracker</Link>
          <Link to="/about" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out">About Us</Link>
        </div>
      </div>
    </nav >
  )
}


export default withRouter(Navbar);