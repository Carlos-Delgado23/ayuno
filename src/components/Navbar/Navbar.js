import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"

import NavbarLink from './NavbarLink'

// ICONS
import { BiBell, BiMenuAltRight, BiX } from 'react-icons/bi'

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    return props.history.listen(() => {
      setIsMenuOpen(false)
    })
  })

  return (
    <nav className="z-20 bg-deep-blue fixed inset-x-0 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex-1 flex items-center justify-start sm:items-stretch">

            <Link to="/home" className="w-auto font-logoTwo text-4xl text-white-lilac">AYUNO</Link>

            <div className="flex items-center hidden sm:block sm:ml-6">
              <div className="flex items-center mt-3">
                <NavbarLink to="/home">Home</NavbarLink>
                <NavbarLink to="/fasts" custClass="ml-4">Fasts</NavbarLink>
                <NavbarLink to="/tracker" custClass="ml-4">Tracker</NavbarLink>
                <NavbarLink to="/about" custClass="ml-4">About Us</NavbarLink>
              </div>
            </div>
          </div>

          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" aria-label="Notifications">
              <BiBell className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet focus:text-white-lilac transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">

              <BiMenuAltRight className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
              <BiX className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />

            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <NavbarLink to="/home" custClass="block  text-base">Home</NavbarLink>
          <NavbarLink to="/fasts" custClass="mt-1 block text-base">Fasts</NavbarLink>
          <NavbarLink to="/tracker" custClass="mt-1 block text-base">Tracker</NavbarLink>
          <NavbarLink to="/about" custClass="mt-1 block text-base">About Us</NavbarLink>
        </div>
      </div>
    </nav >
  )
}


export default withRouter(Navbar);