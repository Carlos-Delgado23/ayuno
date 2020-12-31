import React from 'react'
import BottomNavLink from './BottomNavLink'
import UserMenuNav from '../Navbar/UserMenuNav'

const BottomNav = () => {
  return (
    <div>
      <div className="z-20 sm:hidden fixed inset-x-0 bottom-0 bg-deep-blue shadow -mb-16">
        <div className="fixed inset-x-0 bottom-0 bg-deep-blue shadow">
          <div id="tabs" className="flex justify-between px-8 pt-3 pb-2 text-white-lilac">
            <BottomNavLink to={'/home'} icon={'home'} />
            <BottomNavLink to={'/fasts'} icon={'fasts'} />
            <BottomNavLink to={'/tracker'} icon={'tracker'} />
            <BottomNavLink to={'/recipes'} icon={'recipes'} />
            <UserMenuNav />

          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomNav