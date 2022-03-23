import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const Footer = () => {
  return (
      <>
    <div className="inline-block w-full border-b border-blue-400 py-8">
        </div>
      <div>
        <p className="mb-8 px-4 text-center text-lg font-normal text-white lg:px-20">
          Copyright &copy; {moment().format('YYYY')}{' '}
          <Link href="https://learn-code.com" target="_blank" rel="noreferrer">
            Learn Dash Code
          </Link>
        </p>
      </div>
      </>
  )
}

export default Footer
