import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
      <>
    <div className="inline-block w-full border-b border-blue-400 py-8">
        </div>
      <div>
        <p className="mb-8 px-4 text-center text-lg font-normal text-white lg:px-20">
          Copyright &copy; {moment().format('YYYY')}{' '}
          <a href="https://christianwebdeveloper.com" target="_blank">
            Christian Web Developer
          </a>
        </p>
      </div>
      </>
  )
}

export default Footer
