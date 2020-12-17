import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Transition } from '@headlessui/react'

import firebase from '../../firebase'

// ICONS
import { RiFileList3Line } from 'react-icons/ri'
import { BiHome, BiCarousel, BiUser } from 'react-icons/bi'
import { FaCircleNotch } from 'react-icons/fa'

const BottomNav = (props) => {
  // const [user, setUser] = useState(this.props.currentUser)
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {
    return props.history.listen(() => {
      setProfileOpen(false)
    })
  })

  const profileMenu = () => {
    setProfileOpen(!profileOpen)
  }

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!'))
  }

  return (
    <div>
      <div className="z-20 sm:hidden fixed inset-x-0 bottom-0 bg-deep-blue shadow -mb-16">
        <div className="fixed inset-x-0 bottom-0 bg-deep-blue shadow">
          <div id="tabs" className="flex justify-between px-8 pt-3 pb-2 text-white-lilac">
            <Link to="/home" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <BiHome className="h-6 w-6" />
            </Link>
            <Link to="/fasts" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <BiCarousel className="h-6 w-6" />
            </Link>
            <Link to="/tracker" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <FaCircleNotch className="h-6 w-6" />

            </Link>
            <Link to="/recipes" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <RiFileList3Line className="h-6 w-6" />
            </Link>

            {/* Profile dropdown */}
            <div className="relative">
              <div>
                <button type="button" onClick={profileMenu} className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <BiUser className="h-6 w-6" />
                </button>
              </div>

              {/* Profile dropdown panel, show/hide based on dropdown state. */}
              <Transition
                show={profileOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-75"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-75">

                <div className="origin-bottom-right absolute right-0 bottom-0 mb-16 w-48 rounded-md shadow-lg">
                  <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <Link to="/profile" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-white-lilac
                    hover:bg-electric-violet focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" role="menuitem">Your Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-white-lilac hover:bg-electric-violet focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" role="menuitem">Settings</Link>
                    <span className="cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-white-lilac hover:bg-electric-violet focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" role="menuitem"
                      onClick={handleSignout}>Sign out</span>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default withRouter(BottomNav)