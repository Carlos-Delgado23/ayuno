import React from 'react'
import Modal from 'react-modal'

import { FastCard } from './FastCard'

const Fasts = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center content-center my-16 mx-auto px-3">
      <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3">Types of Fasts</h1>
      <button to="#" className="flex justify-center font-sans font-medium text-base text-biloba-violet border border-biloba-violet hover:bg-electric-violet hover:border-electric-violet py-2 mx-auto w-1/4 rounded-full mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="14.74" height="14.74" viewBox="0 0 14.74 14.74" className="self-center pr-1">
          <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(-6 -6)">
            <path id="Path_6" data-name="Path 6" d="M18,7.5V19.24" transform="translate(-4.63)" fill="none" stroke="#B4B7EE" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Path_7" data-name="Path 7" d="M7.5,18H19.24" transform="translate(0 -4.63)" fill="none" stroke="#B4B7EE" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
          </g>
        </svg>

        Custom
      </button>


      <FastCard />
      <FastCard />
    </div >
  )
}

export default Fasts
