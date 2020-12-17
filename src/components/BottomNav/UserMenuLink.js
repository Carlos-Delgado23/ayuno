import React from 'react'
import { Link } from 'react-router-dom'

const UserMenuLink = ({ children, ...otherProps }) => {
  return (
    <Link className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:text-white-lilac
    hover:bg-electric-violet focus:outline-none focus:text-white-lilac focus:bg-electric-violet transition duration-150 ease-in-out" {...otherProps}>{children}</Link>
  )
}

export default UserMenuLink
