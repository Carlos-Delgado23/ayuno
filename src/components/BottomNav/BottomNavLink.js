import React from 'react'
import { Link } from 'react-router-dom'

// ICONS
import { RiFileList3Line } from 'react-icons/ri'
import { BiHome, BiCarousel, BiUser } from 'react-icons/bi'
import { FaCircleNotch } from 'react-icons/fa'

const Icons = {
  home: BiHome,
  fasts: BiCarousel,
  tracker: FaCircleNotch,
  recipes: RiFileList3Line,
  user: BiUser
}

const BottomNavLink = ({ icon, ...otherProps }) => {
  const IconComp = Icons[icon || '']
  return (
    <Link {...otherProps} className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white-lilac focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out">
      <IconComp className="h-6 w-6" />
    </Link>
  )
}

export default BottomNavLink
