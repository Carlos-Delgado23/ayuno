import React from 'react'
import { Link } from 'react-router-dom'

import { BiEnvelope } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'

const Icons = {
  location: HiOutlineLocationMarker,
  phone: FiPhone,
  email: BiEnvelope,
}

const ContactInfo = ({ icon, children, ...otherProps }) => {

  const IconName = Icons[icon]

  return (
    <div className="flex items-center text-deep-blue px-6 mb-6">
      <IconName className="h-6 w-6 mr-4" />
      <Link className="text-deep-blue text-sm font-medium font-sans" {...otherProps}>{children}</Link>
    </div>
  )
}

export default ContactInfo
