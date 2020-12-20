import React from 'react'
import mime from 'mime-types'
import firebase from '../../../firebase'

import Modal from 'react-modal'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

import './modal.css'
import { BiX } from 'react-icons/bi'


Modal.setAppElement('#root')

class FastModal extends React.Component {
  state = {
    showModal: false,
    title: '',
    image: null,
    imageAlt: '',
    authorized: ['image/jpeg', 'image/png'],
    reactQuillText: '',
    days: '',
    hours: '',
    storageRef: firebase.storage().ref(),
    user: this.props.currentUser,
  }

  createFast = (fileUrl = null) => {
    const fast = {
      image: this.state.image,
      imageAlt: this.state.imageAlt,
      title: this.state.title,
      body: this.state.reactQuillText,
      days: this.state.days,
      hours: this.state.hours,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      }
    }

    firebase
      .database()
      .ref()
      .child(`posts/${slug}`)
  }


  addImage = e => {
    const file = e.target.files[0]
    if (file) {
      this.setState({ file })
    }
  }

  isAuthorized = filename => this.state.authorized.includes(mime.lookup(filename))



  handleReactQuillChange = value => {
    this.setState({
      reactQuillText: value
    })
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })

  }

  handleSubmit = (e) => {
    e.preventDefault()

    // const { reactQuillText, title, image } = this.state()

    try {
      console.log(this.state.reactQuillText)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      showModal,
      title,
      image,
      reactQuillText,
      days,
      hours
    } = this.state

    return (

      <div>
        <button
          className="flex justify-center font-sans font-medium text-xs text-biloba-violet border border-biloba-violet hover:bg-electric-violet hover:border-electric-violet py-2 mx-auto w-1/4 rounded-full mb-8 outline-none focus:outline-none"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => this.setState({ showModal: true })}
        >
          Custom Fast
      </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">

                {/*content*/}
                <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white-lilac outline-none focus:outline-none">

                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <h3 className="text-3xl font-sans font-medium text-deep-blue">
                      Custom Fast
                  </h3>
                    <button
                      className="p-3 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl rounded-full bg-deep-blue leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      <BiX className="w-6 h-6 text-bright-turq" />
                    </button>
                  </div>

                  {/*body*/}
                  <form onSubmit={this.handleSubmit}>
                    <div className="relative p-6 flex-auto">

                      {/* title */}
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        placeholder="Title"
                        className="px-3 py-3 text-deep-blue relative bg-white bg-white rounded-md text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline focus:border-transparent focus:ring-2 focus:ring-deep-blue w-full" />

                      {/* body */}
                      <ReactQuill
                        name='quill'
                        value={reactQuillText}
                        onChange={this.handleReactQuillChange}
                        theme='snow'
                        placeholder="Tell me about this fast..."
                        modules={{
                          toolbar: [
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            ["bold", "italic"],
                            [{ 'align': [] }],
                            [{ list: "bullet" }],
                            ["blockquote"],
                          ]
                        }}
                        className="mt-6 bg-white"
                      />

                      {/* days & time */}
                      <div className="flex mt-6">
                        <div className="text-right mr-2">
                          <label className="block text-sm font-medium text-gray-700">Days</label>
                          <input
                            type="number"
                            min="0"
                            name="days"
                            value={days}
                            onChange={this.handleChange}
                            className="px-3 py-3 text-deep-blue relative bg-white bg-white rounded-md text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline focus:border-transparent focus:ring-2 focus:ring-deep-blue w-3/6" />
                        </div>
                        <div className="ml-2">
                          <label className="block text-sm font-medium text-gray-700">Hours</label>
                          <input
                            type="number"
                            min="0"
                            name="hours"
                            value={hours}
                            onChange={this.handleChange}
                            id="hours" className="px-3 py-3 text-deep-blue relative bg-white bg-white rounded-md text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline focus:border-transparent focus:ring-2 focus:ring-deep-blue w-3/6" />
                        </div>
                      </div>


                      {/* cover photo */}
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Cover photo
                        </label>

                        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label htmlFor="file-upload" className="relative cursor-pointer  rounded-md font-medium text-electric-violet hover:text-biloba-violet focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-biloba-violet">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  name="image"
                                  value={image}
                                  onChange={this.addImage}
                                  className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG or JPG
                          </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*footer*/}
                    <div
                      className="flex items-center justify-end p-6 rounded-b">
                      <button
                        className="text-deep-blue background-transparent font-bold uppercase px-6 py-3 text-sm outline-none rounded-full focus:outline-none hover:shadow-lg mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => this.setState({ showModal: false })}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-deep-blue  text-white-lilac text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
        }

      </div >
    )
  }
}

export default FastModal