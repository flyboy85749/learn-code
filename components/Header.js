import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="inline-flex items-center">
          <Link href="/" passHref>
            
          <Image className="logo cursor-pointer" src="https://media.graphcms.com/5oSms2RT6STadg1xy5Hf" alt="logo image"height="115px" width="150px" passHref />
          </Link>
          <span className="text-4xl font-bold text-white">
              Learn Dash Code
          </span>
          
        </div>
        <div className="block float-right mt-10">
          <Link href="/about" passHref>
            <span className="cursor-pointer text-2xl text-white mr-12">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="cursor-pointer text-2xl text-white">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
