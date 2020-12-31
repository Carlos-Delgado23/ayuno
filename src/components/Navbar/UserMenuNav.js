import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Transition } from '@headlessui/react'

import UserMenuLink from '../BottomNav/UserMenuLink'
import { BiUser } from 'react-icons/bi'

const UserMenuNav = (props) => {
  const { auth } = props
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
              {!auth.uid
                ? <UserMenuLink
                  to='/signin'
                  role='menuitem'
                  onClick={profileMenu}>
                  Sign In
                      </UserMenuLink>
                :
                <>
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
                    to='/signin'
                    role="menuitem"
                    onClick={handleSignout}>
                    Sign Out
                        </UserMenuLink>
                </>
              }
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuNav)