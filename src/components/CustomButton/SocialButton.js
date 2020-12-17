import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Components = {
  google: FcGoogle,
  facebook: FaFacebookF,
  twitter: FaTwitter
}

const SocialButton = ({ tag, color }) => {
  const TagName = Components[tag || '']

  return (
    <button className="p-3 bg-transparent border-0 opacity-5 float-right text-2xl rounded-full bg-white leading-none font-semibold outline-none focus:outline-none shadow-sm">
      <TagName className={color} />
    </button>
  )

}

export default SocialButton
