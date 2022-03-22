import React from 'react'

const ContactForm = () => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Message
      </h3>
<form>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          onChange={ (e) =>{setName(e.target.value)}}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          onChange={ (e) =>{setEmail(e.target.value)}}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div className="mb-4 grid grid-cols-1 gap-4">
          <textarea
            onChange={ (e) =>{setMessage(e.target.value)}}
            className="h-40 w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
            name="message"
            placeholder="Message"
          />
        </div>
      </div>
      <input type='submit' onClick={(e) =>{handleSubmit(e)}} />
      </form>
    </div>
  )
}

export default ContactForm
