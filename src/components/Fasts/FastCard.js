import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../CustomButton/CustomButton'


export const FastCard = () => {
  return (
    <article className="flex flex-col shadow-2xl my-4">
      {/* Article Image */}
      <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className="object-cover" alt="post" />
      <div className="bg-deep-blue flex flex-col justify-start p-6 text-white-lilac text-sans">
        <Link to="#" className="text-2xl font-medium hover:text-biloba-violet pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</Link>
        <Link to="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</Link>
        <CustomButton to="#" type="button">Read More</CustomButton>
      </div>
    </article>
  )
}