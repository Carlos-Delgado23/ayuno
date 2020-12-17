import React from 'react'

const FormInput = ({ handleChange, labelErr, ...otherProps }) => {
  return (

    <input className={`${labelErr} h-12 w-full rounded-xl px-3 mb-4 text-deep-blue border outline-none`} onChange={handleChange} {...otherProps} />

  )
}

export default FormInput
