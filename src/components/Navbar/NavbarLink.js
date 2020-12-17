import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({ custClass, children, ...otherProps }) => {
  return (
    <Link className={`${custClass} px-3 py-2 rounded-md text-sm font-medium leading-5 text-white-lilac hover:bg-biloba-violet focus:outline-none focus:bg-electric-violet transition duration-150 ease-in-out`} {...otherProps}>{children}</Link>
  )
}

export default NavbarLink
