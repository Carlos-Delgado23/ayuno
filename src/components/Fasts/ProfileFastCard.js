import React from 'react'
import * as dayjs from 'dayjs'

import CustomButton from '../CustomButton/CustomButton'

import './FastCard.css'

const ProfileFastCard = ({ fast }) => {
  return (
    <div className="flex w-full">
      <div className="h-auto w-48 bg-cover text-center overflow-hidden object-cover"
        style={{ backgroundImage: `url(${fast.imageURL ? fast.imageURL : 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'})`, backgroundPosition: 'center' }} title={fast.title}>
      </div>
      <div className="border-r border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal w-full">
        <div className="mb-8">
          <div className="font-medium hover:text-biloba-violet text-xl mb-2">{fast.title}</div>
          <div className="ellipses text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: fast.body }}></div>
        </div>
        <div className="flex items-center lg:flex-row">
          <img className="w-10 h-10 rounded-full mr-4" src="https://i.pravatar.cc/300" alt="Avatar of Writer" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              {fast.author ? fast.author.fName + ' ' + fast.author.lName : 'Johnny Smithins'}
            </p>
            <p className="text-gray-600">{dayjs(fast.createdAt.toDate()).format('MMM DD, YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFastCard