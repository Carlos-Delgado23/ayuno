import React from 'react'
import FastModal from './FastFrom/FastModal'

import { FastCard } from './FastCard'

const Fasts = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center content-center my-16 mx-auto px-3">
      <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3">Types of Fasts</h1>
      <FastModal />


      <FastCard />
      <FastCard />
    </div >
  )
}

export default Fasts
