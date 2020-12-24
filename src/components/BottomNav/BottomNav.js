import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Transition } from '@headlessui/react'

import BottomNavLink from './BottomNavLink'
import UserMenuLink from './UserMenuLink'
import { BiUser } from 'react-icons/bi'

const BottomNav = (props) => {
  const [profileOpen, setProfileOpen] = useState(false)

  const profileMenu = () => {
    setProfileOpen(!profileOpen)
  }

  const handleSignout = () => {
    props.signOut()
    profileMenu()
  }

  return (
    <div>
      <div className="z-20 sm:hidden fixed inset-x-0 bottom-0 bg-deep-blue shadow -mb-16">
        <div className="fixed inset-x-0 bottom-0 bg-deep-blue shadow">
          <div id="tabs" className="flex justify-between px-8 pt-3 pb-2 text-white-lilac">
            <BottomNavLink to={'/home'} icon={'home'} />
            <BottomNavLink to={'/fasts'} icon={'fasts'} />
            <BottomNavLink to={'/tracker'} icon={'tracker'} />
            <BottomNavLink to={'/recipes'} icon={'recipes'} />

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
                    <UserMenuLink
                      to="/profile"
                      role="menuitem"
                      onClick={profileMenu}>
                      Your Profile
                    </UserMenuLink>
                    <UserMenuLink
                      to="/settings"
                      role="menuitem"
                      onClick={profileMenu}>
                      Settings
                    </UserMenuLink>
                    <UserMenuLink
                      to='/sign-in'
                      role="menuitem"
                      onClick={handleSignout}>
                      Sign out
                    </UserMenuLink>
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

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav)