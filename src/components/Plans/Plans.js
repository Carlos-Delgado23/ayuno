import React from 'react'

import { PlanCard } from '../PlanCard/PlanCard'

const Plans = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center content-center my-16 mx-auto px-3">
      <h1 className="text-4xl text-white-lilac text-center font-sans font-medium mt-3 mb-8">Types of Fasts</h1>
      <PlanCard />
      <PlanCard />
    </div>
  )
}

export default Plans
