import React from 'react'
import 'react-quill/dist/quill.snow.css'

import { VscLoading } from 'react-icons/vsc'

import FormInput from '../FormInput/FormInput'
import ContactInfo from './ContactInfo'

class Contact extends React.Component {
  state = {
    email: '',
    title: '',
    message: '',
    loading: false,
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })

  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {
      email,
      title,
      message,
      loading,
    } = this.state;

    return (
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none"
      >
        <div className="relative w-5/6 max-w-xl my-auto p-6">

          {/*content*/}
          <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white-lilac outline-none focus:outline-none">

            {/*header*/}
            <div className="flex items-start justify-between p-6 rounded-t">
              <h3 className="text-2xl font-sans font-medium text-deep-blue">
                Get In Touch
                    </h3>
            </div>

            <ContactInfo icon='location'>San Antonio, TX</ContactInfo>
            <ContactInfo icon='phone'>210-777-FAST</ContactInfo>
            <ContactInfo icon='email'>contact@ayuno.com</ContactInfo>


            {/*body*/}
            <form onSubmit={this.handleSubmit}>
              <div className="relative p-6 flex-auto">

                {/* email */}
                <FormInput
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email Address"
                  icon='email'
                />

                {/* title */}
                <FormInput
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Title"
                  icon='title' />


                {/* message */}
                <textarea value={message} name="message" rows="3" class="px-3 py-3 placeholder-gray-400 text-deep-blue relative bg-white bg-white rounded-lg text-sm shadow outline-none w-full border-b" placeholder="Message"></textarea>
              </div>

              {/*footer*/}
              <div
                className="flex items-center justify-end pt-2 pb-6 px-6 rounded-b">
                <button disabled={loading} className="bg-electric-violet h-12 text-white-lilac w-full rounded-3xl shadow-lg">
                  <VscLoading
                    className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`} />
                  <p className={`font-medium text-base ${loading ? 'hidden' : 'inline-block'}`}>
                    Send
                  </p>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact