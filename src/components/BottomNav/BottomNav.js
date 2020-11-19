import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'


const BottomNav = () => {
  const [isProfileOpen, setIsOpen] = useState(false)


  return (
    <div className="">
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-deep-blue shadow -mb-16">
        <div className="fixed inset-x-0 bottom-0 bg-deep-blue shadow">
          <div id="tabs" className="flex justify-between px-8 pt-3 pb-2 text-white-lilac">
            <Link to="/home" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {/* <span className="tab tab-home block text-xs">Home</span> */}
            </Link>
            <Link to="/plans" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {/* <span className="tab tab-kategori block text-xs">Plans</span> */}
            </Link>
            <Link to="/tracker" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              {/* <span className="tab tab-explore block text-xs">Tracker</span> */}
            </Link>
            <Link to="/recipes" className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="self-center" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {/* <span className="tab tab-whishlist block text-xs">Recipes</span> */}
            </Link>

            {/* Profile dropdown */}
            <div className="relative">
              <div>
                <button type="button" onClick={() => setIsOpen(!isProfileOpen)} className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                  {/*  Heroicon name: user  */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>

              {/* Profile dropdown panel, show/hide based on dropdown state. */}
              <Transition
                show={isProfileOpen}
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
                    <Link to="/sign-out" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-white-lilac hover:bg-electric-violet focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" role="menuitem">Sign out</Link>
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


export default BottomNav