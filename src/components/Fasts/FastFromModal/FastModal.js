import React from 'react'
import Modal from 'react-modal'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
// import FastForm from './FastForm'

import './modal.css'


Modal.setAppElement('#root')

class FastModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      title: '',
      image: '',
      reactQuillText: ""
    }
  }

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
        {
          this.state.showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-sm">

                  {/*content*/}
                  <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white-lilac outline-none focus:outline-none">

                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                      <h3 className="text-3xl font-sans font-medium text-deep-blue">
                        Custom Fast
                  </h3>
                      <button
                        className="p-3 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl rounded-full bg-deep-blue leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => this.setState({ showModal: false })}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x text-bright-turq"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                      </button>
                    </div>

                    {/*body*/}
                    <form onSubmit={this.handleSubmit}>
                      <div className="relative p-6 flex-auto">

                        {/* title */}
                        <input
                          type="text"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                          placeholder="Title"
                          className="px-3 py-3 text-deep-blue relative bg-white bg-white rounded-md text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline focus:border-transparent focus:ring-2 focus:ring-deep-blue w-full" />

                        {/* body */}
                        <ReactQuill
                          name='quill'
                          value={this.state.reactQuillText}
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
                                    id="image"
                                    name="image"
                                    type="file"
                                    className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                          </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*footer*/}
                      <div
                        className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                          className="text-electric-violet background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={() => this.setState({ showModal: false })}
                        >
                          Never Mind
                      </button>
                        <button
                          className="bg-deep-blue  text-white-lilac text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Save Changes
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