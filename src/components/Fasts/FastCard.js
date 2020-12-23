import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../CustomButton/CustomButton'

const FastCard = ({ fast }) => {
  return (
    <article className="flex flex-col shadow-2xl my-4" >
      {/* Article Image */}
      < img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className="object-cover" alt="post" />
      <div className="bg-deep-blue flex flex-col justify-start p-6 text-white-lilac text-sans">

        <Link to="#" className="text-2xl font-medium hover:text-biloba-violet pb-4">{fast.title}</Link>

        <Link to="#" className="pb-6">{fast.content}</Link>
        <CustomButton to="#" type="button">Read More</CustomButton>
      </div>
    </article >
  )
}

export default FastCard