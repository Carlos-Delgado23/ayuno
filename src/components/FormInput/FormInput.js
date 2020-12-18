import React from 'react'

// ICONS
import { BiUser, BiEnvelope, BiLockAlt, BiRevision } from 'react-icons/bi'
import { MdTitle } from 'react-icons/md'

const Icons = {
  user: BiUser,
  email: BiEnvelope,
  password: BiLockAlt,
  passwordConfirmation: BiRevision,
  title: MdTitle
}

const FormInput = ({ handleChange, labelErr, icon, ...otherProps }) => {
  const IconName = Icons[icon || '']

  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      {icon
        ? <>
          <IconName className='z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3' />
          <input className={`${labelErr} px-3 py-3 placeholder-gray-400 text-deep-blue relative bg-white bg-white rounded-lg text-sm shadow outline-none w-full pl-10 border-b`} onChange={handleChange} {...otherProps} />
        </>
        : <input className={`${labelErr} px-3 py-3 placeholder-gray-400 text-deep-blue relative bg-white bg-white rounded-lg text-sm shadow outline-none w-full border-b`} onChange={handleChange} {...otherProps} />
      }
    </div>


  )
}

export default FormInput
