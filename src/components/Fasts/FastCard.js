import React from 'react'
import * as dayjs from 'dayjs'

import CustomButton from '../CustomButton/CustomButton'

const FastCard = ({ fast }) => {
  return (
    <article className="flex flex-col shadow-2xl my-4" >
      < img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" className="object-cover" alt="post" />
      <div className="bg-deep-blue flex flex-col justify-start p-6 text-white-lilac text-sans">

        <p className="text-2xl font-medium hover:text-biloba-violet pb-4">{fast.title}</p>

        <div className="pb-6">{fast.body}</div>
        <div className="text-xs text-gray-500">
          {dayjs(fast.createdAt.toDate()).format('MMM DD, YYYY')}
        </div>
      </div>
    </article >
  )
}

export default FastCard