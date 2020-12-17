import React from 'react'

const FormInput = ({ handleChange, labelErr, icon, ...otherProps }) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      {icon ? icon : ''}
      <input className={`${labelErr} px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded-lg text-sm shadow outline-none w-full pl-10`} onChange={handleChange} {...otherProps} />
    </div>


  )
}

export default FormInput
