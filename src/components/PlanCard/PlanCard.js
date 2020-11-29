import React from 'react'

import { Link } from 'react-router-dom'

export const PlanCard = (props) => {
  return (

    <article className="flex flex-col shadow-2xl my-4">
      {/* Article Image */}
      <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className="object-cover" alt="post" />
      <div className="bg-deep-blue flex flex-col justify-start p-6 text-white-lilac text-sans">
        <Link to="#" className="text-2xl font-medium hover:text-biloba-violet pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</Link>
        <Link to="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</Link>
        <button to="#" className="font-sans font-medium text-base text-deep-blue bg-biloba-violet
        hover:text-white-lilac hover:bg-electric-violet py-3 px-3 mx-auto w-4/12 rounded-full ">Read More</button>
      </div>
    </article>
  )
}