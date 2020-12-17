import React from 'react'

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      className="font-sans font-medium text-base text-deep-blue bg-biloba-violet
    hover:text-white-lilac hover:bg-electric-violet py-3 mx-auto w-6/12 rounded-full focus:outline-none"
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton