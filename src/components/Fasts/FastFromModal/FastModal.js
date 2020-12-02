import React, { useState } from 'react'
import Modal from 'react-modal'
import FastForm from './FastForm'

import './modal.css'


Modal.setAppElement('#root')

const FastModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="flex justify-center font-sans font-medium text-base text-biloba-violet border border-biloba-violet hover:bg-electric-violet hover:border-electric-violet py-2 mx-auto w-1/4 rounded-full mb-8 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="14.74" height="14.74" viewBox="0 0 14.74 14.74" className="self-center pr-1">
          <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(-6 -6)">
            <path id="Path_6" data-name="Path 6" d="M18,7.5V19.24" transform="translate(-4.63)" fill="none" stroke="#B4B7EE" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path id="Path_7" data-name="Path 7" d="M7.5,18H19.24" transform="translate(0 -4.63)" fill="none" stroke="#B4B7EE" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
          </g>
        </svg>
  Custom
    </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Custom Fast"
        className="Modal"
      // overlayClassName="Overlay"
      >

        <FastForm />

      </Modal>
    </div>
  )
}

export default FastModal