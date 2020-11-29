import React from 'react'

import { Link } from 'react-router-dom'

export const PlanCard = (props) => {
  return (

    <article className="flex flex-col shadow my-4">
      {/* Article Image */}
      <Link to="#" className="hover:opacity-75">
        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="post" />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link to="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</Link>
        <Link to="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</Link>
        <p to="#" className="text-sm pb-3">
          By <Link to="#" className="font-semibold hover:text-gray-800">David Grzyb</Link>, Published on April 25th, 2020
      </p>
        <Link to="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</Link>
        <Link to="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right" /></Link>
      </div>
    </article>
  )
}