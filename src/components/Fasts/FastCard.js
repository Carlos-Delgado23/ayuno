import React from 'react'
import * as dayjs from 'dayjs'

import CustomButton from '../CustomButton/CustomButton'

import './FastCard.css'

const FastCard = ({ fast }) => {

  return (
    <>
      <div className="h-48 lg:h-auto lg:w-48 md:h-auto md:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover" style={{ backgroundImage: `url(${fast.imageURL ? fast.imageURL : 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'})`, backgroundPosition: 'center' }} title={fast.title}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
        <div className="mb-8">
          <div className="font-medium hover:text-biloba-violet text-xl mb-2">{fast.title}</div>
          <div className="ellipses text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: fast.body }}></div>
        </div>
        <div className="flex items-center md:flex-col lg:flex-row">
          <img className="w-10 h-10 rounded-full mr-4" src="https://i.pravatar.cc/300" alt="Avatar of Writer" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">John Smith</p>
            <p className="text-gray-600">{dayjs(fast.createdAt.toDate()).format('MMM DD, YYYY')}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FastCard