import React from 'react'

// ICONS
import { BiUser, BiEnvelope, BiLockAlt, BiRevision } from 'react-icons/bi'

const IconComp = {
  user: BiUser,
  email: BiEnvelope,
  password: BiLockAlt,
  passwordConfirmation: BiRevision
}

const FormInput = ({ handleChange, labelErr, icon, ...otherProps }) => {
  const IconName = IconComp[icon || '']

  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      <IconName className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />
      <input className={`${labelErr} px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded-lg text-sm shadow outline-none w-full pl-10`} onChange={handleChange} {...otherProps} />
    </div>


  )
}

export default FormInput
